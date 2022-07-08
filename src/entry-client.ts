import { createApp } from './main'
const { app, router } = createApp()
import { loadSvg } from 'vite-plugin-svg-transform-script'
import BeUi from '@/components/be-ui'
// import '@/components/be-ui/style/index.scss'
import '../public/be-ui/style.css'
import svgDict from '@/utils/svg-dict'
loadSvg(svgDict)
app.use(BeUi)
router.isReady().then(async () => {
  app.mount('#hermit_app')
})
