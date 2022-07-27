const http = require('http')
const fs = require('fs')
// const serverStatic = require('serve-static')
const { resolve } = require('path')
const dir = resolve('../')
const client = resolve(dir, './client')
const server = resolve(dir, './server')

// use vite's connect instance as middleware
// server.use(serverStatic(client, { index: false }))
http
  .createServer(async (req, res) => {
    try {
      console.log(req.url)
      const url = req.url
      const template = fs.readFileSync(resolve(client, 'index.html'), 'utf-8')
      const { render } = require(resolve(server, './entry-server.js'))
      const manifest = require(resolve(client, './ssr-manifest.json'))

      const ctx = {}
      const html = await render(url, manifest, ctx, template)
      res.setHeader('Content-Type', 'text/html')
      res.end(html)
    } catch (e) {
      console.error(e)
    }
  })
  .listen(9020, () => {
    console.log('look at http://localhost:9020')
  })
