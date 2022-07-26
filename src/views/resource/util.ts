import { Router } from 'vue-router'

export const isProd = () => {
  if (window.location.host !== 'beosin.com') {
    !import.meta.env.SSR &&
      import('../../../public/be-ui/be-ui.es.js').then(res => {
        res.BeMessage.service({
          customClass: 'hermit-msg',
          titles: 'The resource is a PDF file， please check in the production environment',
          msgType: 'warning',
          duration: 2500,
          offsetTop: 80,
          close: false,
        })
      })
    return false
  }
  return true
}

// import config from '../../enums/config'
export const combineLink = (uri: string) => {
  const href = window.location.host
  // const href = 'https://beosin.com' // 此处由于测试环境没有配置，所以默认为生产环境
  const url = href + '/' + uri
  return url
}

export const openUrl = (url: string, { target }: any) => {
  const aEl = document.createElement('a')
  aEl.href = url
  aEl.target = target
  aEl.click()
}

// 文章详情（包括pdf预览）跳转逻辑统一封装
export const goPreviewPage = (item: any, router?: Router) => {
  if ((item.type === 1 && item.url) || item.type === 7) {
    // if (!isProd()) return // pdf验证只能生产环境查看
    window.open(item.url)
  } else {
    const routeConfig = item.enUrl
      ? { path: '/resources/' + item.enUrl }
      : { path: '/resources/' + item.title, query: { id: item.id } }
    const host = item.enUrl
      ? '/resources/' + item.enUrl
      : '/resources/' + item.title + '?id=' + item.id
    if (router) {
      router.push(routeConfig)
    } else {
      openUrl(host, { target: '_blank' })
    }
  }
}

export const preToText = (date: any) => {
  if (!date) return ''
  const codes = date.split(' ')[0].split('-')
  const monthMap: any = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  }
  return `${monthMap[codes[1]]} ${codes[2]}, ${codes[0]}`
}
