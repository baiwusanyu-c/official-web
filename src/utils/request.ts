/*
 * @request.ts
 * @deprecated
 * @author czh
 * @update (czh 2021/9/29)
 */
import axios from 'axios'
import config from '../enums/config'
import { getStore, removeSession, removeStore } from './common'
import qs from 'qs'
// create an axios instance
const service = axios.create({
  baseURL:
    String(import.meta.env.VITE_PROJECT_ENV) === 'production'
      ? config.baseURL + '/hermit/back/'
      : config.baseURL,
  timeout: 50000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config: any) => {
    const tokenCache = getStore('token')
    if (tokenCache) {
      config.headers['Authorization'] = 'Bearer ' + getStore('token')
    }
    config.headers['Accept-Language'] = getStore('lang')
      ? getStore('lang')
      : 'en_US'
    if (config.method === 'post' && config.url !== '/auth/oauth/login') {
      config.data = config.params
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      config.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
      delete config.params
      if (config.otherParams) {
        config.data = qs.stringify(config.data)
      }
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
      }
      if (res.code === 401 || res.code === 920000003) {
        removeSession('CETInfo')
        removeStore('token')
        removeStore('userInfo')
        return Promise.reject(new Error('登录过期' || 'Error'))
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
