import axios from 'axios'
import {getStore} from "./common";
import config from '../enums/config'

const mimeMap = {
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    zip: 'application/zip'
}

export function downLoadZip(str, filename) {
    let url = config.baseURL + str
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            responseType: 'blob',
            headers: { 'Authorization': getStore('token') === undefined ? '' : getStore('token') }
        }).then(res => {
            resolveBlob(res, mimeMap.zip, filename)
            resolve()
        })
    })
}
/**
 * 解析blob响应内容并下载
 * @param {*} res blob响应内容
 * @param {String} mimeType MIME类型
 */
export function resolveBlob(res, mimeType, fileN) {
    const aLink = document.createElement('a')
    var blob = new Blob([res.data], { type: mimeType })
        // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
    var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
    var contentDisposition = decodeURI(res.headers['Content-disposition'])
    var result = patt.exec(contentDisposition)
    var fileName = result ? result[1] : fileN;
    fileName = fileName.replace(/\"/g, '')
    if (navigator.msSaveBlob) { // IE10+ 
        return navigator.msSaveBlob(blob, fileName);
    } else {
        aLink.href = URL.createObjectURL(blob)
        aLink.setAttribute('download', fileName) // 设置下载文件名称
        document.body.appendChild(aLink)
        aLink.click()
        document.body.removeChild(aLink)
    }
}