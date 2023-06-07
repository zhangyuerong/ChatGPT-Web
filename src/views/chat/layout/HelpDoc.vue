<script setup lang='ts'>
import { useUserStore } from "@/store";
const userStore = useUserStore();
function tryOn(parentId:number,childId:number){
  let name = newsList[parentId].children[childId].name;
  // console.log(name,parentId,childId);
  userStore.updateUserInfo({
    tryText: name,
  });
}
const newsList = [
  {
    id: 1,
    name: "创意剧本",
    children: [
      {
        id: 1,
        name: "请为我编写一个杨过大战钢铁侠的电影脚本，要足够精彩，细节丰富，像好莱坞电影，有场景有对话，达到剧本标准",
      },
      {
        id: 2,
        name: "请为我构思一个关于西游记中的孙悟空与哈利波特魔法世界相遇的奇幻电影脚本。",
      },
      {
        id: 3,
        name: "请帮我创作一个融合了侏罗纪公园和星际迷航元素的科幻冒险故事梗概。",
      },
    ],
  },
  {
    id: 2,
    name: "热门电影与电视剧",
    children: [
      {
        id: 1,
        name: "请分析近年来中国热门电影《流浪地球》的成功因素。",
      },
      {
        id: 2,
        name: "请讨论中国古装电视剧《琅琊榜》中的人物塑造和故事情节。",
      },
      {
        id: 3,
        name: "请评价中国综艺节目《奔跑吧兄弟》对于中国综艺市场的影响。",
      },
    ],
  },
  {
    id: 3,
    name: "社交媒体内容",
    children: [
      {
        id: 1,
        name: "我要写一篇关于厦门苏小糖的探店文案",
      },
      {
        id: 2,
        name: "请为我们新发布的手机应用创作5条微信朋友圈推广内容，强调其创新功能和优势。",
      },
      {
        id: 3,
        name: "请编写一篇关于企业文化的Boss直聘文章，展示我们公司的价值观和使命。",
      },
    ],
  },
  {
    id: 4,
    name: "翻译：",
    children: [
      {
        id: 1,
        name: "请将以下句子翻译成中文，不做多余解释，只输出译文：The wealth of the mind is the only wealth",
      },
      {
        id: 2,
        name: "请将以下句子翻译成英语，不做多余解释，只输出译文：天道酬勤",
      },
      {
        id: 3,
        name: "请将这封关于产品合作的德文邮件翻译成英文：",
      },
    ],
  },
  {
    id: 5,
    name: "游戏娱乐",
    children: [
      {
        id: 1,
        name: "我们来玩猜谜语吧，你说谜面，我猜谜底",
      },
      {
        id: 2,
        name: "给我讲个有意思的笑话吧，笑点要足",
      },
      {
        id: 3,
        name: "请为我提供一个关于动物的谜语，要求具有趣味性和启发性。",
      },
    ],
  },
  {
    id: 6,
    name: "广告文案创作",
    children: [
      {
        id: 1,
        name: "请为我创建5条关于环保运动的广告语，关键词包括“可持续发展”、“环保”和“减少浪费”。",
      },
      {
        id: 2,
        name: "请帮我写5条关于健康饮食的广告文案，强调“天然”、“新鲜”和“有益健康”。",
      },
      {
        id: 3,
        name: "请为我们的新款运动鞋设计5条吸引力强的广告语，关键词有“舒适”、“轻便”和“时尚”。",
      },
    ],
  },
  {
    id: 7,
    name: "编程高手",
    children: [
      {
        id: 1,
        name: "用python写一段hello world示例，回答请尽量言简意赅，不要有过多解释",
      },
      {
        id: 2,
        name: "如何用JavaScript发出HTTP请求",
      },
      {
        id: 3,
        name: "详细说说Node.js的异步编程模型",
      },
    ],
  },
  {
    id: 8,
    name: "角色扮演",
    children: [
      {
        id: 1,
        name: "请扮演一位知心朋友，与我聊聊关于人生规划和职业选择的话题。",
      },
      {
        id: 2,
        name: "请扮演一位专业的旅行顾问，为我推荐一条适合度假的旅行路线。",
      },
      {
        id: 3,
        name: "请扮演一位健身教练，为我提供一些建议，以帮助我更好地坚持锻炼和保持健康。",
      },
    ],
  },
  {
    id: 9,
    name: "梅西和马拉多纳谁更强？",
    children: [
      {
        id: 1,
        name: "梅西已经帮助阿根廷获得了2022年卡塔尔世界杯，从足球历史角度详细说说他是否超越了马拉多纳",
      },
      {
        id: 2,
        name: "请比较梅西和马拉多纳在职业生涯中的技术特点、成就和荣誉，以评估他们各自的实力。",
      },
      {
        id: 3,
        name: "请分析梅西和马拉多纳在球场上的表现及作为团队成员的贡献，以判断他们谁更具竞争力。",
      },
    ],
  },
  {
    id: 10,
    name: "周杰伦和张学友谁的乐坛地位高？",
    children: [
      {
        id: 1,
        name: "请分析周杰伦和张学友在音乐创作和演唱方面的特点和成就，以评估他们在乐坛的地位。",
      },
      {
        id: 2,
        name: "请从粉丝基础、商业成功和社会影响力等角度对比周杰伦和张学友的成就。",
      },
      {
        id: 3,
        name: "请从音乐史的角度评估周杰伦和张学友在华语乐坛的贡献和地位。",
      },
    ],
  },
  {
    id: 11,
    name: "詹姆斯真的比乔丹更强吗？",
    children: [
      {
        id: 1,
        name: "请对比迈克尔·乔丹和勒布朗·詹姆斯在职业生涯中的技术特点、成就和荣誉，以评估他们各自的实力。",
      },
      {
        id: 2,
        name: "请分析乔丹和詹姆斯在球场上的表现及作为团队成员的贡献，以判断他们谁更具竞争力。",
      },
      {
        id: 3,
        name: "请从篮球历史的角度评估乔丹和詹姆斯的地位，以及他们对篮球运动的影响。",
      },
    ],
  },
  {
    id: 12,
    name: "教育辅导",
    children: [
      {
        id: 1,
        name: "请解释牛顿第二定律的应用和实例。",
      },
      {
        id: 2,
        name: "请帮我分析《哈姆雷特》中主人公的性格特点。",
      },
      {
        id: 3,
        name: "请教我如何解决这道数学题：√(49) + 3² = ?",
      },
    ],
  },
  {
    id: 13,
    name: "职业发展与招聘",
    children: [
      {
        id: 1,
        name: "请给我一些建议，如何在面试中脱颖而出？",
      },
      {
        id: 2,
        name: "请分享一些提高团队协作效率的方法。",
      },
      {
        id: 3,
        name: "请帮我撰写一份针对程序员职位的简历。",
      },
    ],
  },
  {
    id: 14,
    name: "邮件撰写",
    children: [
      {
        id: 1,
        name: "请帮我写一封告知客户本周末优惠活动的营销邮件。",
      },
      {
        id: 2,
        name: "请帮我回复客户关于产品退货流程的咨询邮件。",
      },
      {
        id: 3,
        name: "请撰写一封关于公司年度总结的内部通知邮件。",
      },
    ],
  },
  {
    id: 14,
    name: "趣味生活",
    children: [
      {
        id: 1,
        name: "我今天在图书馆看到一个女生很心动，很想认识她，第一句话怎么开口呢。多提供几条建议",
      },
      {
        id: 2,
        name: "我想做一道鱼香肉丝，给我一份详细的菜谱和制作过程",
      },
      {
        id: 3,
        name: "我想练出8块腹肌，帮我给一份训练计划",
      },
    ],
  },
  {
    id: 15,
    name: "博客文章与新闻稿",
    children: [
      {
        id: 1,
        name: "请为我撰写一篇关于虚拟现实技术在教育领域应用的博客文章",
      },
      {
        id: 2,
        name: "请根据我们新产品发布会的信息，编写一篇新闻稿",
      },
      {
        id: 3,
        name: "请帮我写一篇关于企业社会责任的博客文章，包括公司的实际做法和成果。",
      },
    ],
  },
  {
    id: 15,
    name: "创意写作",
    children: [
      {
        id: 1,
        name: "请根据以下情节梗概，为我编写一个短篇科幻小说：在未来的地球上，人类与机器人共存，但一场突如其来的危机改变了这一切。",
      },
      {
        id: 2,
        name: "请为我创作一个关于友谊与成长的青春剧本，主要角色包括四个性格迥异的高中生。",
      },
      {
        id: 3,
        name: "请编写一个儿童故事，讲述一只小狗历经艰辛，终于找到终于找到了一个温暖的家庭的故事。",
      },
    ],
  },
  {
    id: 16,
    name: "技术文档",
    children: [
      {
        id: 1,
        name: "请为我们的新款智能手表撰写一份产品说明书，包括功能、使用方法和注意事项。",
      },
      {
        id: 2,
        name: "请根据我们的软件产品特点，编写一份操作手册。",
      },
      {
        id: 3,
        name: "请帮我创建一份关于我们电子产品维修流程的FAQ文档。",
      },
    ],
  },
  {
    id: 16,
    name: "会议记录与总结",
    children: [
      {
        id: 1,
        name: "请根据我提供的以下会议摘要，为我生成一份详细的会议记录。",
      },
      {
        id: 2,
        name: "请帮我总结刚刚进行的项目进度汇报会议，包括关键事项和后续行动计划。",
      },
      {
        id: 3,
        name: "请根据以下简要说明，为我撰写一份关于新员工培训会议的总结报告。",
      },
    ],
  },
  {
    id: 17,
    name: "商业计划与战略",
    children: [
      {
        id: 1,
        name: "请帮助我制定一份针对新成立的餐饮企业的商业计划，包括市场分析、目标客户群、竞争对手分析、营销策略以及财务预测。",
      },
      {
        id: 2,
        name: "请为一家互联网初创公司设计一个产品推广战略，包括定位、目标市场、渠道选择以及预期收益。",
      },
      {
        id: 3,
        name: "请分析如何在竞争激烈的电商领域中，提升一家中小型企业的市场份额和品牌知名度。",
      },
    ],
  },
  {
    id: 18,
    name: "数据分析报告",
    children: [
      {
        id: 1,
        name: "请根据给定的销售数据，分析一家零售公司近一年的销售趋势，并提出改善销售业绩的建议。",
      },
      {
        id: 2,
        name: "请根据提供的社交媒体数据，分析一家公司的社交媒体活动效果，包括关注者增长、互动率以及内容传播情况，并给出优化策略。",
      },
      {
        id: 3,
        name: "请分析一家企业的客户满意度调查数据，找出影响客户满意度的关键因素，并提出提高客户满意度的方案。",
      },
    ],
  },
  {
    id: 19,
    name: "中国传统文化",
    children: [
      {
        id: 1,
        name: "请介绍中国的传统节日中秋节的由来和习俗。",
      },
      {
        id: 2,
        name: "请分析《红楼梦》在中国古典文学中的地位和影响。",
      },
      {
        id: 3,
        name: "请谈谈中国传统建筑的特点和代表性建筑物。",
      },
    ],
  },
  {
    id: 20,
    name: "个人健康与健身",
    children: [
      {
        id: 1,
        name: "请给我推荐一个适合初学者的瑜伽动作。",
      },
      {
        id: 2,
        name: "请介绍一下高血压患者应该注意的饮食原则。",
      },
      {
        id: 3,
        name: "请分享一个增肌训练计划。",
      },
    ],
  },
  {
    id: 21,
    name: "生活建议与心理辅导",
    children: [
      {
        id: 1,
        name: "请给我提供一些建议，如何应对恋爱中的沟通问题？",
      },
      {
        id: 2,
        name: "请分享一些提高自信心的方法。",
      },
      {
        id: 3,
        name: "请教我如何缓解焦虑和压力？",
      },
    ],
  },
  {
    id: 22,
    name: "旅行规划与攻略",
    children: [
      {
        id: 1,
        name: "请为我规划一条10天的欧洲旅行线路。",
      },
      {
        id: 2,
        name: "请介绍一下日本京都的必去景点和美食。",
      },
      {
        id: 3,
        name: "请分享一些在泰国曼谷旅行时的实用贴士。",
      },
    ],
  },
  {
    id: 23,
    name: "投资与理财建议",
    children: [
      {
        id: 1,
        name: "请简要介绍一下股票投资的基本原则。",
      },
      {
        id: 2,
        name: "请分享一些选择保险产品时应该注意的因素。",
      },
      {
        id: 3,
        name: "请教我如何制定一个合理的个人理财计划。",
      },
    ],
  },
  {
    id: 24,
    name: "美食与烹饪",
    children: [
      {
        id: 1,
        name: "请教我如何制作一道地道的意大利面。",
      },
      {
        id: 2,
        name: "请给我推荐一个适合素食者的健康食谱。",
      },
      {
        id: 3,
        name: "请分享一些烹饪技巧，以提高菜肴的口感和营养价值。",
      },
    ],
  },
  {
    id: 25,
    name: "科技与数码产品",
    children: [
      {
        id: 1,
        name: "请比较一下苹果iPhone和三星Galaxy系列手机的特点和优势。",
      },
      {
        id: 2,
        name: "请为我推荐一款性价比高的笔记本电脑。",
      },
      {
        id: 3,
        name: "请介绍一下家用无线路由器的购买和配置注意事项。",
      },
    ],
  },
];
</script>

<template>
  <div class="p-6">
    <div class="text-center text-2xl font-semibold mb-10">
      <span
        class="cursor-pointer transition duration-300 ease-in-out text-blue-600"
        >ChatGPT 指令大全</span
      >
      <!-- <span class="mx-6 text-gray-300">|</span> -->
      <!-- <span class="cursor-pointer transition duration-300 ease-in-out text-gray-400">注意事项</span> -->
      <!-- <span class="cursor-pointer transition duration-300 ease-in-out text-gray-400">Daller2 指南</span> -->
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      style="font-family: cursive"
    >
      <div
        class="bg-gradient-to-br p-6 rounded-lg shadow-lg" v-for="(item, index) of newsList" :key="index" >
        <h3 class="text-xl font-semibold mb-4">{{ item.name }}</h3>
        <ul class="list-disc list-inside">
          <li class="text-base mb-3 flex items-center" v-for="(child, index2) of item.children" :key="index2">
            <div class="flex-grow mr-2">
              <span>{{ child.name }}</span>
            </div>
            <button @click="tryOn(index,index2)" class="bg-white text-blue-500 dark:text-indigo-400 hover:bg-blue-200 dark:hover:bg-indigo-300 px-3 py-1 rounded whitespace-nowrap transition duration-300 ease-in-out">
              尝试
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>