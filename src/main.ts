import { createApp } from 'vue'
import { loadSvg } from 'vite-plugin-svg-transform-script'
import { router } from './router/router'
import App from './App.vue'
import 'virtual:windi.css'
// @ts-ignore
import BeUI from '../public/be-ui/be-ui.es'
import '../public/be-ui/style.css'
import { i18n } from './utils/i18n'
import svgDict from './utils/svg-dict'
/**
 * 初始化图标，生成svgDom
 */
loadSvg(svgDict)
const app = createApp(App)
app.use(BeUI)
app.use(router)
app.use(i18n)
app.mount('#hermit_app')
