/*
* @service.ts
* @deprecated 
* @author czh
* @update (czh 2021/12/18)
*/
import request from "../utils/request";

// 搜索 拿 code碼
export function getBackCode(){
    return request({
        url: '/back/code',
        method: 'get',

    })
}
export interface IReportCode {
    num?:number | undefined,
    code?:number | null,
    uuid?:string
}
export function getReportByCode(params:IReportCode){
    return request({
        url: '/website/report/search',
        method: 'get',
        params
    })
}
