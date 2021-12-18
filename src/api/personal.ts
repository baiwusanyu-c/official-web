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

// http://192.168.0.32:40001/project/15/interface/api/265
// 下载单个
export interface IExpReport {
    fileUuid?:string,
    reportNum?:number
}
export function exportReport(params:IExpReport){
    return request({
        url: '/website/common/download/single',
        method: 'get',
        params,
    })
}
// http://192.168.0.32:40001/project/15/interface/api/271
// 下载全部
export interface IExpReportAll {
    belongUser?:boolean,
}
export function exportReportAll(params:IExpReportAll){
    return request({
        url: '/website/common/download/batch',
        method: 'get',
        params,
    })
}
export interface ISearchReport {
    num?:number,
}
export function searchReport(params:ISearchReport){
    return request({
        url: '/website/report/info',
        method: 'get',
        params,
    })
}
