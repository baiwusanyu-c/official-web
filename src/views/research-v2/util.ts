import config from "../../enums/config"
export const combineLink = (uri:string) => {
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