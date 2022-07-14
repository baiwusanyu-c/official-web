const getFileName = (url) => {
  const as = url.split('/')
  const fullName = as[as.length - 1]
  const name = fullName.split('_')[1]
  return name
}

export const previewFile = (url) =>  {
  const aLink = document.createElement('a')
  aLink.href = url
  aLink.target = "_blank"
  document.body.appendChild(aLink)
  aLink.click()
  document.body.removeChild(aLink)
}

export const downloadFile = (url) =>  {
  const aLink = document.createElement('a')
  aLink.href = url
  aLink.setAttribute('download', getFileName(url)) // 设置下载文件名称
  document.body.appendChild(aLink)
  aLink.click()
  document.body.removeChild(aLink)
}

export default downloadFile