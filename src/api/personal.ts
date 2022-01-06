/*
* @personal.ts
* @deprecated 
* @author czh
* @update (czh 2021/12/18)
*/
import request from "../utils/request";


export interface IReportList {
    value?:string,
    pageSize?:number
    pageNum?:number
}
export interface IReportListRes {
    id?: number,
    projectName?: string,
    reportName?: string,
    reportNum?: string,
    belongUser?: string,
    reportType?: number,
    contractAddress?: string,
    linkAddress?: string,
    safeAuditItem?: string,
    originalName?: string,
    uuid?: string,
    createBy?: string,
    createTime?: string,
    updateBy?: string,
    updateTime?: string,
    delFlag?: number,
    openFlag?: number
}
export function verifyCode(params:IReportList){
    return request({
        url: '/website/report/list',
        method: 'get',
        params,
    })
}

