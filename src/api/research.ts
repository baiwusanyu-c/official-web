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
    url: '/website/article/overseas/home/list',
    method: 'get',
    params: {
      pageNum: 1,
      pageSize: 4,
    },
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

// 查询文章详细
export function hermitGetArticle(query) {
  return request({
    url: '/website/article/overseas/admin/info',
    method: 'get',
    params: query,
  })
}

// 查询文章详细
export function guessYouLikeList(query) {
  return request({
    url: '/website/article/overseas/home/guess-list',
    method: 'get',
    params: query,
  })
}

// 获取项目详情
export function getProjectDetail(relationProjectId) {
  return request({
    url: `/ussa/project/website/info/${relationProjectId}`,
    method: 'get',
  })
}

// 获取置顶文章
export function getArticleList() {
  return request({
    url: '/website//article/overseas/admin/list',
    method: 'get',
    params: {
      upFlag: true,
      pageNum: 1,
      pageSize: 10,
    },
  })
}

// 获取文章tabs
export function getArticleTabTypes() {
  return request({
    url: '/website/article/overseas/home/types',
    method: 'get',
  })
}

// 更具enUrl获取文章详情
export function getArticleByEnUrl(data: any) {
  return request({
    url: '/website/article/overseas/home/getByEnUrl',
    method: 'get',
    params: data,
  })
}

type PageQuery = { pageSize: number; pageNum: number; langType: number } // 1-英文报告
// 报告分页查询
export function getReportList(params: PageQuery) {
  return request({
    url: '/website/report/list',
    method: 'get',
    params: {
      belongUserId: false,
      langType: 1,
      // queryTotalSize: 35,
      ...params,
    },
  })
}
