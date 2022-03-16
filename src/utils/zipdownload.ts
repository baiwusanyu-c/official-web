import axios, { AxiosRequestConfig } from 'axios'
import { getStore } from './common'
import config from '../enums/config'

const mimeMap = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
}
interface INavigator {
  msSaveBlob?: (blob: any, defaultName?: string) => boolean
}
export function downLoadZip(str: string, filename: string) {
  const url = config.baseURL + str
  // @ts-ignore
  const axiosConfig: AxiosRequestConfig = {
    method: 'get',
    url: url,
    responseType: 'blob',
    headers: {
      Authorization: (!getStore('token') ? '' : 'Bearer ' + getStore('token')) as string,
    },
  }
  return new Promise(resolve => {
    axios(axiosConfig).then(res => {
      resolveBlob(res, mimeMap.zip, filename)
      resolve(res)
    })
  })
}
/**
 * 解析blob响应内容并下载
 * @param {*} res blob响应内容
 * @param {String} mimeType MIME类型
 * @param {String} fileN 文件名
 */
export function resolveBlob(res: any, mimeType: string, fileN: string) {
  const aLink = document.createElement('a')
  const blob = new Blob([res.data], { type: mimeType })
  // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
  const patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
  const contentDisposition = decodeURI(res.headers['Content-disposition'])
  const result = patt.exec(contentDisposition)
  let fileName = result ? result[1] : fileN
  fileName = fileName.replace(/"/g, '')
  if ((navigator as INavigator).msSaveBlob) {
    // IE10+
    return ((navigator as INavigator)?.msSaveBlob as Function)(blob, fileName)
  } else {
    aLink.href = URL.createObjectURL(blob)
    aLink.setAttribute('download', fileName) // 设置下载文件名称
    document.body.appendChild(aLink)
    aLink.click()
    document.body.removeChild(aLink)
  }
}
