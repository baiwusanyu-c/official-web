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
import { useEventBus } from '@vueuse/core'
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
  (requestCfg: any) => {
    const SSR = import.meta.env.SSR
    const tokenCache = !SSR && getStore('token')
    if (tokenCache && requestCfg.url !== '/website/quote/create') {
      requestCfg.headers['Authorization'] = 'Bearer ' + getStore('token')
    }
    requestCfg.headers['Accept-Language'] = !SSR && getStore('lang') ? getStore('lang') : 'en_US'
    if (requestCfg.method === 'post' && requestCfg.url !== '/auth/oauth/login') {
      requestCfg.data = requestCfg.params
      requestCfg.headers['Content-Type'] = 'application/json;charset=UTF-8'
      requestCfg.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
      delete requestCfg.params
      if (requestCfg.otherParams) {
        requestCfg.data = qs.stringify(requestCfg.data)
      }
    }
    return requestCfg
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    const bus = useEventBus<string>('loginExpired')
    if (res.code !== 200) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
      }
      if (res.code === 401 || res.code === 920000003) {
        removeSession('CETInfo')
        removeStore('token')
        removeStore('userInfo')
        bus.emit('true')
        import('@/router/router').then(({ default: router }) => {
          router.push('/index/home')
        })
        const err = getStore('lang') === 'en_US' ? 'Login Expired' : '登录过期'
        return Promise.reject(new Error(err))
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
