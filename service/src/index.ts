import express,{ Request } from 'express'
import type { RequestProps } from './types'
import type { ChatMessage } from './chatgpt'
import { chatConfig, chatReplyProcess, currentModel } from './chatgpt'
import { auth } from './middleware/auth'
import { limiter } from './middleware/limiter'
import { isNotEmptyString } from './utils/is'
import { getConnection } from './utils/dbconfig'

const app = express()
const router = express.Router()

app.use(express.static('public'))
app.use(express.json())

app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'authorization, Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

// 必须在微信端访问
// const redirectToWeixin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
//   const ua = req.headers['user-agent']?.toLowerCase() || ''
//   if (/micromessenger/.test(ua)) {
//     // 如果当前请求是从微信浏览器发起的，继续下一步操作
//     next()
//   } else {
//     // 否则，重定向到微信浏览器
//     const redirectUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx97caedc3a2fa3ca0&redirect_uri=${encodeURIComponent(req.protocol + '://' + req.get('host') + req.originalUrl)}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
//     res.redirect(redirectUrl)
//   }
// }



function getClientIP(req: Request) {
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (!ipAddress) {
    return null;
  }
  if (ipAddress.includes(',')) {
    // 如果有多个 IP 地址，返回第一个
    return ipAddress.split(',')[0];
  }
  return ipAddress;
}

//进入页面（刷新页面），将ip地址异步保存，并返回当天他还有几次聊天次数
router.post('/restrict-ip', async (req, res) => {
  const clientIp = getClientIP(req);
  // console.log(`Client IP address: ${clientIp}`);
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute(
      'SELECT COUNT(id) id FROM ip_question_log WHERE ip = ? AND DATE(create_date) = CURDATE()',
      [clientIp]
    );
    // console.log(rows[0]);
    let counts = 0;
    if(rows[0].id > 0){ 
      counts = rows[0].id;
    }
    const [rows2] = await connection.execute(
      'SELECT value FROM sys_config WHERE name = "IP_FREE_NUM" ',
      [clientIp]
    );
    await connection.execute(
      'INSERT IGNORE INTO ip_log(ip, create_day) VALUES (?, CURDATE())',
      [clientIp]
    );
    // console.log(rows2[0].value,counts);
    res.status(200).json({ success: true, data: {"counts":counts,"sumNum":rows2[0].value} });
    connection.release();
  } catch (err) {
    // console.error(err);
    res.sendStatus(500);
  }
});


// 发送消息-> 增加记录 -> 返回当天他还有几次数
router.post('/insert-log', async (req, res) => {
  const {question} = req.body;
  // console.log("增加提问记录",token);
  try {
    //获取IP
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const connection = await getConnection()
    //查询数据库，如果当天聊到30次了, 就不让聊了, 如果要聊，就要去付费版本
    await connection.execute(
      'INSERT INTO ip_question_log(ip,message) VALUES (?,?)',
      [clientIp,question]
    );
    // const [rows] = await connection.execute(
    //   'SELECT COUNT(id) FROM ip_question_log WHERE ip = ? AND DATE(create_time) = CURDATE()',
    //   [clientIp]
    // );
    // if (rows[0].id >= 30) {
    //   //就算他达到次数了，也还是可以将他聊天的数据存起来，只是不让他往chatgpt发送请求
    //   res.status(200).json({ success: false, message: '由于使用人数过多，已限制您每天30次免费试用，您已达到限额，请明天再试!' });
    // }
    // res.status(200).json({ success: true, message: '您今天还有'+ (30-rows[0].id) +'次免费试用额度' });
    connection.release();//用于将连接释放回连接池。当你使用连接池时，这是一个非常重要的步骤
  } catch (err) {
    // console.error(err);
    res.sendStatus(500);
  }
});

router.post('/chat-process', [auth, limiter], async (req, res) => {
  res.setHeader('Content-type', 'application/octet-stream')

  try {
    const { prompt, options = {}, systemMessage, temperature, top_p } = req.body as RequestProps
    let firstChunk = true
    await chatReplyProcess({
      message: prompt,
      lastContext: options,
      process: (chat: ChatMessage) => {
        res.write(firstChunk ? JSON.stringify(chat) : `\n${JSON.stringify(chat)}`)
        firstChunk = false
      },
      systemMessage,
      temperature,
      top_p,
    })
  }
  catch (error) {
    res.write(JSON.stringify(error))
  }
  finally {
    res.end()
  }
})

router.post('/config', auth, async (req, res) => {
  try {
    const response = await chatConfig()
    res.send(response)
  }
  catch (error) {
    res.send(error)
  }
})

router.post('/session', async (req, res) => {
  try {
    const AUTH_SECRET_KEY = process.env.AUTH_SECRET_KEY
    const hasAuth = isNotEmptyString(AUTH_SECRET_KEY)
    res.send({ status: 'Success', message: '', data: { auth: hasAuth, model: currentModel() } })
  }
  catch (error) {
    res.send({ status: 'Fail', message: error.message, data: null })
  }
})

router.post('/verify', async (req, res) => {
  try {
    const { token } = req.body as { token: string }
    if (!token)
      throw new Error('Secret key is empty')

    if (process.env.AUTH_SECRET_KEY !== token)
      throw new Error('密钥无效 | Secret key is invalid')

    res.send({ status: 'Success', message: 'Verify successfully', data: null })
  }
  catch (error) {
    res.send({ status: 'Fail', message: error.message, data: null })
  }
})

app.use('', router)
app.use('/api', router)
app.set('trust proxy', 1)

app.listen(3008, () => globalThis.console.log('Server is running on port 3008'))
