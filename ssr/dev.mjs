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

/* relevant snippet from server.js */
// const cssUrls = new Set(),
const collectCssUrls = (mod, urls = new Set()) => {
  if (!mod) return
  if (!mod.url) return
  if (mod.url.endsWith('.css') || (mod.id && /\?vue&type=style/.test(mod.id))) {
    urls.add(mod.url)
  }
  mod.importedModules.forEach(dep => {
    collectCssUrls(dep)
  })
  return urls
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
    // const mod = await viteServer.moduleGraph.getModuleByUrl(
    //   '/src/main.ts'
    // ) /* TODO replace with your entry */
    // const cssUrls = mod.ssrTransformResult.deps.filter(d => d.endsWith('.css'))
    // const cssUrls = collectCssUrls(mod)
    // console.log('cssUrls', cssUrls)
    const ctx = {}
    const [appHtml, route, links] = await render(url, {}, ctx)
    // console.log('88888', links)
    const devCss = []
      .map(url => {
        return `<link rel="stylesheet" type="text/css" href="${url}">`
      })
      .join('')
    const html = template
      .replace('<!--app-html-->', appHtml)
      .replace(`<title></title>`, `<title>${route.meta.title || ''}</title>`)
      .replace(
        `<meta name="keywords" content="" />`,
        `<meta name="keywords" content="${route.meta.keywords || ''}" />`
      )
      .replace(
        `<meta name="description" content="" />`,
        `<meta name="description" content="${route.meta.description || ''}" />`
      )
      .replace('<!--dev-css-->', devCss)
    res.set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    console.log(e)
  }
})

server.listen(9010, () => {
  console.log('look at http://localhost:9010')
})
