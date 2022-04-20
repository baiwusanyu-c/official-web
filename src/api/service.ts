/*
 * @service.ts
 * @deprecated
 * @author czh
 * @update (czh 2021/12/18)
 */
import request from '../utils/request'

// 搜索 拿 code碼
export function getBackCode() {
  return request({
    url: '/code',
    method: 'get',
  })
}
export interface IReportCode {
  keyword?: string | undefined
  code?: number | ''
  uuid?: string
}

export function getReportByCode(params: IReportCode) {
  return request({
    url: '/website/report/search-by-keyword',
    method: 'get',
    params,
  })
}
