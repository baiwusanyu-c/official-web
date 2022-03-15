import { createApp } from 'vue'
import { router } from './router/router'
import App from './App.vue'
import 'virtual:windi.css'
// @ts-ignore
import BeUI from '../public/be-ui/be-ui.es'
import './assets/css/be-ui/style.css'
import { i18n } from './utils/i18n'
import { SvgDom } from './utils/create-svg'
/**
 * 初始化图标，生成svgDom
 */
const initIcon = ():void =>{
  new SvgDom()
}
initIcon()
const app = createApp(App)
app.use(BeUI)
app.use(router)
app.use(i18n)
app.mount('#app')
