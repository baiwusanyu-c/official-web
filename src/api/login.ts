/*
* @login.ts
* @deprecated 
* @author czh
* @update (czh 2021/9/29)
*/

import request from '../utils/request'


// 邮箱验证码
export interface IMailCode {
    userName:string
}
export function verifyCode(params:IMailCode){
    return request({
        url: '/system/user/verifyCode',
        method: 'get',
        params,
    })
}

// 忘记密码 邮箱验证码
export function verifyCodePassword(params:IMailCode){
    return request({
        url: '/system/user/password/code',
        method: 'get',
        params,
    })
}

// 忘记密码
export interface IForgetPassword {
    account?:string,
    password?:string,
    re_password?:string,
    verification_code?:string
}
export function forgetPassword(params:IForgetPassword){
    return request({
        url: '/system/user/new_official_website/email/password/forget',
        method: 'post',
        params,
    })
}



// 邮箱注册
export interface IRegister {
    account?:string,
    password?:string,
    verification_code?:string
}
export function registerAccount(params:IRegister){
    return request({
        url: '/system/user/register',
        method: 'post',
        params,
    })
}




// 登录
export interface ILogin {
    account?:string,
    password?:string,
}
export function loginAccount(params:ILogin){
    return request({
        url: '/system/user/register',
        method: 'post',
        params,
    })
}