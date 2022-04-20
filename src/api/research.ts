/*
 * @research.ts
 * @deprecated
 * @author czh
 * @update (czh 2022/3/18)
 */
import request from '../utils/request'
import { IPageParam } from '../utils/types'

// 獲取首頁四條博客
export function getBlogNews() {
  return request({
    url: '/website/article/overseas/home/brief',
    method: 'get',
  })
}
export declare interface IBlogListParam extends IPageParam {
  type: number
}
// 博客显示列表
export function getBlogNewsList(params: IBlogListParam) {
  return request({
    url: '/website/article/overseas/home/list',
    method: 'get',
    params,
  })
}

type PageQuery = { pageSize: number; pageNum: number }
// 报告分页查询
export function getReportList(params: PageQuery) {
  return request({
    url: '/website/report/list',
    method: 'get',
    params: {
      belongUserId: false,
      queryTotalSize: 35,
      ...params,
    },
  })
}
