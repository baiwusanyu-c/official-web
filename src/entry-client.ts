import { createApp } from './main'
const { app, router } = createApp()
import { loadSvg } from 'vite-plugin-svg-transform-script'
import { renderToString } from 'vue/server-renderer'
// import '@/components/be-ui/style/index.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import svgDict from '@/utils/svg-dict'
loadSvg(svgDict)

router.isReady().then(async () => {
  // 测试激活

  // const path = router.currentRoute.value.fullPath
  // const ssr = await fetch(`http://localhost:9010/#/${path}`)
  //   .then(res => res.text())
  //   .then(t => {
  //     const index = t.indexOf('<div id="hermit_app">')
  //     return t.substring(index + 21)
  //   })

  // const local = await renderToString(app)
  // console.log(local.length)
  // for (let i = 100; i < ssr.length; i++) {
  //   if (ssr[i] !== local[i]) {
  //     const l = Math.max(i - 20, 0)
  //     const r = Math.min(i + 20, ssr.length, local.length)
  //     console.log(ssr.slice(l, r), '\n', local.slice(l, r), '\n', ssr[i])
  //     break
  //   }
  // }

  app.mount('#hermit_app')
})
