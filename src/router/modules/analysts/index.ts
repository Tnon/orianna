/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-09-26 12:59:32
 * @LastEditTime: 2022-02-22 14:30:21
 */

import { RouteRecordRaw } from 'vue-router'
// import settings from "@/router/modules/setting";
const routes: Array<RouteRecordRaw> = [

    {
        path: 'sample',
        name: 'analysts-sample',
        meta: {
            title: '样本',
            icon: '#axysxyangben'
        },
        component: () => import(/* webpackChunkName: "analysts-sample" */ '@/views/analysts/sample/index.vue')
    },
    {
        path: 'report',
        name: 'analysts-report',
        meta: {
            hidden: true,
            parent: 'analysts-sample'
        },
        component: () => import(/* webpackChunkName: "analysts-report" */ '@/views/analysts/sample/report/index.vue')
    },
    {
        path: 'user',
        name: 'analysts-user',
        meta: {
            title: '用户',
            icon: '#axysxyonghu'
        },
        component: () => import(/* webpackChunkName: "analysts-user" */ '@/views/analysts/user/index.vue'),
    },
    // ...settings
]
export default routes