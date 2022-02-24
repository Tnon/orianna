/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-07 14:59:56
 * @LastEditTime: 2022-02-07 15:32:58
 */
import request from '@/utils/http';

enum Api {
    addAuthCode = '/api/auth/device/create',
    authList = '/api/auth/list',
    updateAuth = '/api/auth/allocate',
    updateTenantMark = '/api/auth/device/edit',
    authStaticDetail = '/api/auth/detail/sum',
    authDetailList = '/api/auth/detail/list'
}



/**
 * @description: 新增设备码
 */
export function addAuthCode(params: API.addCodeState) {
    return request({
        url: Api.addAuthCode,
        method: 'POST',
        params,
    }, {
        successMessageText: '设备码新增成功'
    });
}


/**
 * @description: 获取授权列表
 */
export function getAuthList(params: tableParams<API.Filter>) {
    return request({
        url: Api.authList,
        method: 'POST',
        params,
    });
}

/**
 * @description: 追加授权
 */
export function updateAuthCode(params: API.updateAuthState) {
    return request({
        url: Api.updateAuth,
        method: 'POST',
        params,
    }, {
        successMessageText: '授权追加成功'
    });
}

/**
 * @description: 授权编辑
 */
export function updateTenantMark(params: API.tenantMark) {
    return request({
        url: Api.updateTenantMark,
        method: 'POST',
        params,
    }, {
        successMessageText: '编辑成功'
    });
}
/**
 * @description: 授权详情统计
 */
export function getAuthStatic(params: API.authStatic) {
    return request({
        url: Api.authStaticDetail,
        method: 'POST',
        params,
    });
}

/**
 * @description: 获取授权详情列表
 */
export function getAuthDetailList(params: tableParams<API.authDetail>) {
    return request({
        url: Api.authDetailList,
        method: 'POST',
        params,
    });
}
