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
// use vite's connect instance as middleware
server.use(viteServer.middlewares)
server.use('*', async (req, res) => {
  try {
    const url = req.originalUrl
    if (url === '/undefined') return
    // always read fresh template in dev
    let template = fs.readFileSync(resolve('index.html'), 'utf-8')
    template = await viteServer.transformIndexHtml(url, template)

    const render = (await viteServer.ssrLoadModule('./src/entry-server.ts')).render
    const [appHtml] = await render(url, {})
    const html = template.replace('<!--app-html-->', appHtml)
    res.set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    console.log(e)
  }
})

server.listen(9010, () => {
  console.log('look at http://localhost:9010')
})
