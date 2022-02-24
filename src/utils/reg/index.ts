import { bytesLength } from "../tools"

/*
 * @Author: Delavin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-08-17 11:42:43
 * @LastEditTime: 2022-02-24 11:30:31
 */
const emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
const accountRef = /^[A-Za-z0-9]+$/
//邮箱
const validateEmail = (_, value) => {
    if (emailReg.test(value) || !value) {
        return Promise.resolve()
    }
    return Promise.reject()

}//管理中心地址/域名
const ValidateAddress = (_, value) => {
    const validateIp =
        /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    const validateDomain =
        /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
    if ((!validateIp.test(value) && !validateDomain.test(value)) || !value) {
        return Promise.reject()
    }
    return Promise.resolve()
}
//长度正则
const validateByteLength = (length: number) => {
    const validator = (_, value) => {
        if (bytesLength(value) > length) {
            return Promise.reject()
        }
        return Promise.resolve()
    }
    return validator
}
//设备识别码
const validateDeviceCode = (_, value) => {
    if (value && /^[A-Za-z0-9]{12}$/.test(value)) {
        return Promise.resolve()
    }
    return Promise.reject()
}
//租户标识
const validateTenantName = (_, value) => {
    if (value && bytesLength(value) < 33 && /^[A-Za-z0-9\u4e00-\u9fa5]+$/.test(value)) {
        return Promise.resolve()
    }
    return Promise.reject()
}
//账号正则
const validateAccount = (_, value) => {
    if (value && accountRef.test(value) && bytesLength(value) <= 20) {
        return Promise.resolve()
    }
    return Promise.reject()
}
export {
    emailReg,
    validateEmail,
    validateByteLength,
    validateAccount,
    ValidateAddress,
    validateTenantName,
    validateDeviceCode
}
