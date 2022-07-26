import express from 'express'
import fs from 'fs'
import vite from 'vite'
import { resolve } from 'path'
const server = express()
const viteServer = await vite.createServer({
  root: resolve('./'),
  logLevel: 'error',
  server: {
    middlewareMode: 'ssr',
    watch: {
      // During tests we edit the files too fast and sometimes chokidar
      // misses change events, so enforce polling for consistency
      usePolling: true,
      interval: 100,
    },
  },
})

const htmlRender = (template, appHtml, route) => {
  const html = template
    .replace(`<title></title>`, `<title>${route.meta.title || ''}</title>`)
    .replace(
      `<meta name="keywords" content="" />`,
      `<meta name="keywords" content="${route.meta.keywords || ''}" />`
    )
    .replace(
      `<meta name="description" content="" />`,
      `<meta name="description" content="${route.meta.description || ''}" />`
    )
    .replace('<!--app-html-->', appHtml)
  return html
}

// use vite's connect instance as middleware
server.use(viteServer.middlewares)
server.use('*', async (req, res) => {
  try {
    const url = req.originalUrl
    if (url === '/index/undefined' || url === '/undefined') return
    // always read fresh template in dev
    let template = fs.readFileSync(resolve('index.html'), 'utf-8')
    template = await viteServer.transformIndexHtml(url, template)

    const render = (await viteServer.ssrLoadModule('./src/entry-server.ts')).render
    const ctx = {}
    const [appHtml, route] = await render(url, {}, ctx)
    const html = htmlRender(template, appHtml, route)
    res.set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    console.log(e)
  }
})

server.listen(9010, () => {
  console.log('look at http://localhost:9010')
})
