import { createSSRApp } from 'vue'

import { createRouter } from './router/router'
import App from './App.vue'
import 'virtual:windi.css'
// @ts-ignore
import { i18n } from './utils/i18n'
/**
 * 初始化图标，生成svgDom
 */

export const createApp = () => {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  app.use(i18n)
  return { app, router }
}
