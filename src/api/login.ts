/*
* @login.ts
* @deprecated 
* @author czh
* @update (czh 2021/9/29)
*/

import request from '../utils/request'
import qs from 'qs'

// 注册 -获取邮箱验证码
export interface IMailCode {
    userName:string
}
export function verifyCode(params:IMailCode){
    return request({
        url: '/user/official_site_sg_system/verify_code/register',
        method: 'get',
        params,
    })
}
// 注册
export interface IRegister {
    account?:string,
    password?:string,
    verification_code?:string
}
export function registerAccount(params:IRegister){
    return request({
        url: '/user/official_site_sg_system/email/register',
        method: 'post',
        params,
    })
}


// 忘记密码 邮箱验证码
export function verifyCodePassword(params:IMailCode){
    return request({
        url: '/user/official_site_sg_system/verify_code/reset',
        method: 'get',
        params,
    })
}

// 忘记密码
export interface IForgetPassword {
    account?:string,
    password?:string,
    re_password?:string,
    verification_code?:string,
}
export function forgetPassword(params:IForgetPassword){
    return request({
        url: '/user/new_official_website/email/password/forget',
        method: 'post',
        params,
    })
}





// 登录
export interface ILogin {
    username?:string,
    password?:string,
    client_id?:string,
    client_secret?:string,
    grant_type?:string,
    scope?:string,
    uuid?:string,
    code?: string | number,
    login_type?:string
}
export function loginAccount(params:ILogin){
    return request({
        url: '/auth/oauth/login?' + qs.stringify(params),
        method: 'post',
    })
}
// 登录 - 获取数字验证码
export function getCodeImg(){
    return request({
        url:  '/code',
        method: 'get'
    })
}