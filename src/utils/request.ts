/*
* @request.ts
* @deprecated
* @author czh
* @update (czh 2021/9/29)
*/
import axios from 'axios'
import config from '../enums/config'
// create an axios instance
const service = axios.create({
    baseURL: config.baseURL + '/api/', // url = base url + request url
    timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
       // config.headers['Authorization'] = getToken('token') ? 'Bearer ' + getToken('token') : '';
        return config
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
        if (res.code !== 200) {

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login

            }
            if (res.code === 401 || res.code === 920000003) {

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
