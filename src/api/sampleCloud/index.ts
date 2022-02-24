/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-07 14:59:56
 * @LastEditTime: 2022-02-22 13:52:14
 */
import request from '@/utils/http';

enum Api {
    sampleList = '/api/sample/list',
    zipList = '/api/sample/compress/list',
    zipInfo = '/api/sample/compress/info',
    compressList = '/api/sample/compress/list',
    reportDetail = '/api/sample/report/get',
    getWorkList = '/api/work_order/list',
    uploadResult = '/api/work_order/result/upload',
    reportInfo = '/api/sample/report/get',
    reportInfoAna = '/api/work_order/report/get'
}

/**
 * @description: 获取样本列表
 */
export function getSampleList(params: tableParams<API.Filter>) {
    return request({
        url: Api.sampleList,
        method: 'POST',
        params
    });
}

/**
 * @description: 查看压缩包列表
 */
export function getCompressList(params: tableParams<API.Filter>) {
    return request({
        url: Api.compressList,
        method: 'POST',
        params,
    });
}

/**
 * @description: 报告详情 
 */
export function getReportInfo(params: API.reportDetail) {
    return request({
        url: Api.reportInfo,
        method: 'POST',
        params
    });
}
//分析员


/**
 * @description: 获取分析员工单列表
 */
export function getWorkList(params: tableParams<API.Filter>) {
    return request({
        url: Api.getWorkList,
        method: 'POST',
        params
    });
}

/**
 * @description: 上传分析结果
 */
export function uploadResultForm(params: API.AnyResult) {
    return request({
        url: Api.uploadResult,
        method: 'POST',
        params
    });
}

/**
 * @description: 报告详情 压缩包列表
 */
export function getZipInfo(params: { id: any }) {
    return request({
        url: Api.zipInfo,
        method: 'POST',
        params
    });
}
/**
 * @description: 报告详情 压缩包列表
 */
export function getZipList(params: tableParams<API.Filter>) {
    return request({
        url: Api.zipList,
        method: 'POST',
        params
    });
}


/**
 * @description: 报告详情 分析员 
 */
export function getReportInfoAna(params: API.reportDetail) {
    return request({
        url: Api.reportInfoAna,
        method: 'POST',
        params
    });
}
