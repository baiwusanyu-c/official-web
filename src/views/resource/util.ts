import { Router } from 'vue-router'

// import config from '../../enums/config'
export const combineLink = (uri: string) => {
  // const href = window.location.host
  const href = 'https://beosin.com' // 此处由于测试环境没有配置，所以默认为生产环境
  const url = href + '/' + uri
  return url
}

export const openUrl = (url, { target }) => {
  const aEl = document.createElement('a')
  aEl.href = url
  aEl.target = target
  aEl.click()
}

export const goPreviewPage = (item: any, router?: Router) => {
  if ((item.type === 1 && item.url) || item.type === 7) {
    window.open(item.url)
  } else {
    if (router) {
      router.push({ path: '/resources/' + item.title, query: { id: item.id } })
    } else {
      const host = '/resources/' + item.title + '?id=' + item.id
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
