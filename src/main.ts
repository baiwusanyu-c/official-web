import { createSSRApp } from 'vue'
import BeUi from './components/be-ui'

import { createRouter } from './router/router'
import App from './App.vue'
import 'virtual:windi.css'
import '../public/be-ui/style.css'
import '@/assets/css/quill.snow.css' // 富文本字体格式渲染样式，仅预览使用
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
  app.use(BeUi)
  return { app, router }
}
