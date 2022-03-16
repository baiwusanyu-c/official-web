/*
 * @quote.ts
 * @deprecated
 * @author czh
 * @update (czh 2021/12/18)
 */
import request from '../utils/request'

// 新建咨詢
export interface IQuote {
  name?: string
  email?: string
  type?: number
  mobile?: string
  message?: string
  code?: string
  uuid?: string
}
export function createQuote(params: IQuote) {
  return request({
    url: '/website/quote/create',
    method: 'POST',
    params,
  })
}
