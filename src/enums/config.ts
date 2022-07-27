// 生产环境
// import { IOption } from '../utils/types'
const ssr = import.meta.env.SSR
const productionUrl = {
  baseURL: 'https://beosin.com',
}
// 开发环境
const developmentUrl = {
  // baseURL = 'http://192.168.0.216:9527',
  baseURL: 'http://192.168.0.2:9527',
}
// 测试环境
const stagingnUrl = {
  baseURL: ssr ? 'http://192.168.1.231:9527' : 'http://124.71.132.90:9527',
}
// 预发布环境
const pretestnUrl = {
  baseURL: 'http://0.0.0.0:9527',
}

const developmentUrl02 = {
  baseURL: 'http://192.168.0.2:9527',
}

const stagingnUrl02 = {
  baseURL: ssr ? 'http://192.168.1.231:9527' : 'http://124.71.132.90:9527',
}

const production02 = {
  baseURL: 'http://124.71.160.46:9527',
}
const configUrl = {
  production: productionUrl,
  development: developmentUrl,
  staging: stagingnUrl,
  pretest: pretestnUrl,
  staging02: stagingnUrl02,
  development02: developmentUrl02,
  production02: production02,
}

export default configUrl[String(import.meta.env.VITE_PROJECT_ENV) as keyof typeof configUrl]
