/*
 * @Author: Delavin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-06-10 16:33:32
 * @LastEditTime: 2022-02-07 14:57:46
 */
import request from '@/utils/http';
enum Api {
  systemConfig = '/api/admin/config/product',
  getSystemCfg = '/api/config/threaten/get',
  setSystemCfg = '/api/config/threaten/set',
  authLic = '/api/config/auth/get',
  uploadLic = '/api/config/auth/edit'
}


/**
 * @description: 获取logo和产品名称
 */
export function systemConfig() {
  return request({
    url: Api.systemConfig,
    method: 'GET',
  });
}

/**
 * @description: 获取平台配置
 */
export function getSystemConfig(params = {}) {
  return request({
    url: Api.getSystemCfg,
    method: 'POST',
    params
  });
}

/**
 * @description: 保存平台配置
 */
export function setSystemConfig(params: API.systemConfig) {
  return request({
    url: Api.setSystemCfg,
    method: 'POST',
    params
  }, {
    successMessageText: '保存成功'
  });
}

/**
 * @description: 获取授权
 */
export function getAuthLic(params = {}) {
  return request({
    url: Api.authLic,
    method: 'POST',
    params
  });
}

/**
 * @description: 上传授权文件
 */
export function uploadLic(params: any) {
  return request({
    url: Api.uploadLic,
    method: 'POST',
    params
  }, {
    successMessageText: '授权成功'
  });
}
