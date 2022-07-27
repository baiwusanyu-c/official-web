import { createApp } from './main'
import { renderToString, SSRContext } from 'vue/server-renderer'
import { setup } from '@css-render/vue3-ssr'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
type Manifest = {
  [p: string]: string[]
}

const htmlRender = (
  template: string,
  appHtml: string,
  css: string,
  route: RouteLocationNormalizedLoaded
) => {
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
    .replace('<!--preload-links-->', css)
  return html
}

const render = async (url: string, manifest: Manifest, ctx: SSRContext, template: string) => {
  const { app, router } = createApp()
  router.push(url)
  await router.isReady()
  const { collect } = setup(app)

  const route = router.currentRoute.value

  const appHtml = await renderToString(app, ctx)
  const css = collect()
  const links = renderPreloadLinks(ctx.modules, manifest)

  return htmlRender(template, appHtml, css + '\n' + links, route)
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
          links += '\n' + renderPreloadLink(file)
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
