// import config from "../../enums/config"
export const combineLink = (uri: string) => {
  const href = window.location.host
  const url = href + '/' + uri
  return url
}

export const openUrl = (url, { target }) => {
  const aEl = document.createElement('a')
  aEl.href = url
  aEl.target = target
  aEl.click()
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
