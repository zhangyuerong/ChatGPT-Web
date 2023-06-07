import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'


// 检查是否在生产环境中
// console.log("import.meta.env.VITE_APP_LOGGING,",import.meta.env.VITE_APP_LOGGING);
if (import.meta.env.VITE_APP_LOGGING === 'false') {
  console.log = () => {};
}


async function bootstrap() {
  const app = createApp(App)
  
  setupAssets()

  setupScrollbarStyle()

  setupStore(app)

  setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
