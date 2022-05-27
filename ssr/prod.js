const express = require('express')
const fs = require('fs')
const serverStatic = require('serve-static')
const { resolve } = require('path')
const server = express()
const dir = resolve('./')
const client = resolve(dir, 'dist/client')
// use vite's connect instance as middleware
server.use(serverStatic(client))

server.use('*', async (req, res) => {
  const url = req.originalUrl
  const template = fs.readFileSync(client + '/index.html', 'utf-8')
  const { render } = require('../dist/server/entry-server.js')
  const manifest = require('../dist/client/ssr-manifest.json')
  const [appHtml, links] = await render(url, manifest)
  // console.log(appHtml)
  const html = template.replace('<!--app-html-->', appHtml).replace('<!--preload-links-->', links)
  res.set({ 'Content-Type': 'text/html' }).end(html)
})

server.listen(9000)
