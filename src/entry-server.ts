import { createApp } from './main'
import { renderToString, SSRContext } from 'vue/server-renderer'
import { useSSRContext } from 'vue'
type Manifest = {
  [p: string]: string[]
}

const render = async (url: string, manifest: Manifest, ctx: SSRContext) => {
  const { app, router } = createApp()
  router.push(url)
  await router.isReady()

  const html = await renderToString(app, ctx)
  console.log('url', url, html.length)
  const links = renderPreloadLinks(ctx.modules, manifest)
  const ctx2 = useSSRContext()
  console.log('ctx2', ctx2)
  return [html, links]
}

function renderPreloadLinks(modules: string[], manifest: Manifest) {
  let links = ''
  const seen = new Set()

  modules.forEach(id => {
    const files = manifest[id]
    if (files) {
      files.forEach(file => {
        if (!seen.has(file)) {
          seen.add(file)
          links += renderPreloadLink(file)
        }
      })
    }
  })
  return links
}

const renderPreloadLink = (file: string) => {
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href="${file}">`
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`
  } else if (file.endsWith('.woff')) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`
  } else if (file.endsWith('.woff2')) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`
  } else if (file.endsWith('.gif')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`
  } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`
  } else if (file.endsWith('.png')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`
  } else {
    // TODO
    return ''
  }
}

export { render }
