const fs = require('fs')
const { resolve } = require('path')
const dir = resolve('../')
const client = resolve(dir, './client')
const server = resolve(dir, './server')
const express = require('express')
const app = express()

app
  .use(express.static(client, { index: false, maxAge: '1y' }))
  .use(async (req, res) => {
    try {
      const url = req.originalUrl
      const template = fs.readFileSync(resolve(client, 'index.html'), 'utf-8')
      const { render } = require(resolve(server, './entry-server.js'))
      const manifest = require(resolve(client, './ssr-manifest.json'))

      const ctx = {}
      const html = await render(url, manifest, ctx, template)

      res.set({ 'Content-Type': 'text/html', 'Cache-Control': 'no-store' })
      res.end(html)
    } catch (e) {
      console.error(e)
    }
  })
  .listen(80, () => {
    console.log('look at http://localhost:80')
  })
