const fs = require('fs')
const { resolve } = require('path')
const dir = resolve('../')
const client = resolve(dir, './dist/client')
const server = resolve(dir, './dist/server')
const express = require('express')
const app = express()

app
  .use(express.static(client, { index: false }))
  .use(async (req, res) => {
    try {
      const url = req.originalUrl
      const template = fs.readFileSync(resolve(client, 'index.html'), 'utf-8')
      const { render } = require(resolve(server, './entry-server.js'))
      const manifest = require(resolve(client, './ssr-manifest.json'))

      const ctx = {}
      const html = await render(url, manifest, ctx, template)

      res.set({ 'Content-Type': 'text/html' })
      res.end(html)
    } catch (e) {
      console.error(e)
    }
  })
  .listen(9030, () => {
    console.log('look at http://localhost:9030')
  })
