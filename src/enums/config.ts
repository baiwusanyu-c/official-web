// 生产环境
import {IOption} from "../utils/types";

enum productionUrl {
    baseURL = 'https://www.pronhub.com',
    authBaseURL = '',
    imgURL = 'https://www.pronhub.com',
    codeURL = 'https://www.pronhub.com',
    helpURL = 'https://www.pronhub.com',
}
// 开发环境
enum developmentUrl {
    baseURL =  'http://192.168.0.216:9527',
    authBaseURL = '',
    imgURL = 'http://0.0.0.0',
    codeURL = 'http://0.0.0.0',
    helpURL = 'http://0.0.0.0:18081'
}
// 测试环境
enum stagingnUrl {
    baseURL = 'http://124.71.193.230:9527',
    authBaseURL = '',
    imgURL = 'http://0.0.0.0',
    codeURL = 'http://0.0.0.0:9527',
    helpURL = 'http://0.0.0.0:18081'
}
// 预发布环境
enum pretestnUrl {
    baseURL = 'http://0.0.0.0:9527',
    authBaseURL = '',
    imgURL = 'http://0.0.0.0', // ！！！勿动，预发布环境没有图片服务，需要用测试环境的
    codeURL = 'http://0.0.0.0:9527',
    helpURL = 'http://0.0.0.0:18081',
}
const configUrl:IOption = {
    production:productionUrl,
    development:developmentUrl,
    staging:stagingnUrl,
    pretest:pretestnUrl
}
console.log(process.env.NODE_ENV)
export default configUrl[String(process.env.NODE_ENV)]
