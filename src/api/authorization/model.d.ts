/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-07 15:00:06
 * @LastEditTime: 2022-02-07 15:00:06
 */
declare namespace API {
    type addCodeState = {
        device_code: string
        tenant_mark: string
        auto_num: number
        expert_num: number
        remark: number
    }
    type updateAuthState = {
        id: string
        auto_change: number
        expert_change: number
        remark: number
    }
    type tenantMark = {
        id: string
        tenant_mark: string
    }
    type authStatic = {
        filter: {
            id: string
            date_range: string
        }
    }
    type authDetail = {
        id: string
        date_range: string
    }
}