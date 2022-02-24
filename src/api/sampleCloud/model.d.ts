/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-07 15:00:06
 * @LastEditTime: 2022-02-22 13:50:28
 */
declare namespace API {
    type Filter = {
        search_data: string;
    }
    type reportDetail = {
        id: any
    }
    type AnyResult = {
        id: string
        result: string
        summary: string
        suggestion: string
        file: any
    }
}