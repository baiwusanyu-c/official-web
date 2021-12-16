/*
* @login.ts
* @deprecated 
* @author czh
* @update (czh 2021/9/29)
*/

import request from '../utils/request'
//修改密码-登录后
export function updatePwdOn() {
    return request({
        url: '/system/user/update/password',
        method: 'post',
    })
}
