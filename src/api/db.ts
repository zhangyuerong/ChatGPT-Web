import { post } from '@/utils/request/dbRequest'


export function restrictIp<T = any>() {
  try {
    const response =  post<T>({
      url: '/restrict-ip'
    })
    // console.log("restrictIp->response:",response); // 打印服务器返回的数据
    return response;
  } catch (error) {
    // console.log("restrictIp->error,",error);
    return error;
  }
}

// 增加问题记录
export async function insertLogApi<T = any>(
  params: {question: string}
) {
  try {
    // console.log("insertQuestion",params.question);
    const response = await post<T>({
      url: '/insert-log', // 修改为完整的URL
      data: {question: params.question},
    });
    // console.log("insertLog->response:",response); // 打印服务器返回的数据
    return response ; // 返回服务器返回的数据
  } catch (error) {
    // console.log("insertLog->error,",error);
    return error;
  }
}