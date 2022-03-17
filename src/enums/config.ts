// 生产环境
import { IOption } from '../utils/types'

enum productionUrl {
  baseURL = 'https://beosin.com',
}
// 开发环境
enum developmentUrl {
  baseURL = 'http://192.168.0.216:9527',
}
// 测试环境
enum stagingnUrl {
  baseURL = 'http://124.71.193.230:9527',
}
// 预发布环境
enum pretestnUrl {
  baseURL = 'http://0.0.0.0:9527',
}

enum developmentUrl02 {
  baseURL = 'http://192.168.0.2:9527',
}

enum stagingnUrl02 {
  baseURL = 'http://124.71.132.90:9527',
}

enum production02 {
  baseURL = 'http://124.71.160.46:9527',
}
const configUrl: IOption = {
  production: productionUrl,
  development: developmentUrl,
  staging: stagingnUrl,
  pretest: pretestnUrl,
  staging02: stagingnUrl02,
  development02: developmentUrl02,
  production02: production02,
}
export default configUrl[String(import.meta.env.VITE_PROJECT_ENV)]
