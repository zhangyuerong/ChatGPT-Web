import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { setupPageGuard } from './permission'
import { ChatLayout } from '@/views/chat/layout'
import { useBaiduAnalytics } from '@/baidu-analytics'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: ChatLayout,
    redirect: '/chat',
    children: [
      {
        path: '/',
        // path: '/chat/:uuid?',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
  },

  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/index.vue'),
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/chat/layout/HelpDoc.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  // history: createWebHashHistory(),//浏览器带#访问
  history: createWebHistory(),// 使用 history 模式
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

setupPageGuard(router)



if(import.meta.env.VITE_BAIDUANALYTICS_VIEW === 'true'){
  // 百度统计
  const baiduAnalytics = useBaiduAnalytics()

  // 替换为您的百度统计代码
  const baiduAnalyticsCode = '6c98d440a44e8dda880df8de51aa1d1a'
  // 插入百度统计脚本
  const script = document.createElement('script')
  script.src = `https://hm.baidu.com/hm.js?${baiduAnalyticsCode}`
  document.body.appendChild(script)

  // 监听路由变化
  router.afterEach((to) => {
    baiduAnalytics.push(['_trackPageview', to.fullPath])
  })
}


export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
