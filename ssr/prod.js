const express = require('express')
const fs = require('fs')
const serverStatic = require('serve-static')
const { resolve } = require('path')
const server = express()
const dir = resolve('./')
const client = resolve(dir, '../client')
// use vite's connect instance as middleware
server.use('*', (req, res, next) => {
  console.log(req.originalUrl)
  next()
})
console.log(client)

server.use(serverStatic(client, { index: false }))

server.use('*', async (req, res) => {
  const url = req.originalUrl
  if (url === '/undefined') {
    console.log('req', req)
    return res.end('ok')
  }
  console.log('url22222', url, resolve(client, 'index.html'))
  const template = fs.readFileSync(resolve(client, 'index.html'), 'utf-8')
  const { render } = require('../server/entry-server.js')
  const manifest = require('../client/ssr-manifest.json')
  const ctx = {}
  const [appHtml, links] = await render(url, manifest, ctx)
  const html = template.replace('<!--app-html-->', appHtml).replace('<!--preload-links-->', links)
  res.set({ 'Content-Type': 'text/html' }).end(html)
})

server.listen(9020, () => {
  console.log('look at http://localhost:9020')
})
