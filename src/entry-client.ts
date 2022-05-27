import { createApp } from './main'
const { app, router } = createApp()
import { loadSvg } from 'vite-plugin-svg-transform-script'
import BeUi from '../public/be-ui/be-ui.es'

router.isReady().then(() => {
  loadSvg(svgDict)
  app.use(BeUi)

  app.mount('#app')
})
