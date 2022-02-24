/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-09-26 12:59:32
 * @LastEditTime: 2021-12-15 15:58:01
 */

import { markRaw } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { RouterTransition } from '@/components/transition'
const routes: Array<RouteRecordRaw> = [

    {
        path: 'sample',
        name: 'platform-sample',
        meta: {
            title: '样本',
            icon: '#axysxyangben'
        },
        component: () => import(/* webpackChunkName: "platform-sample" */ '@/views/platform/sample/index.vue')
    },
    {
        path: 'report',
        name: 'platform-report',
        meta: {
            hidden: true,
            parent: 'platform-sample'
        },
        component: () => import(/* webpackChunkName: "platform-report" */ '@/views/platform/sample/report/index.vue')
    },
    {
        path: 'compress',
        name: 'platform-compress',
        meta: {
            hidden: true,
            parent: 'platform-sample'
        },
        component: () => import(/* webpackChunkName: "platform-compress" */ '@/views/platform/sample/compress/index.vue')
    },
    {
        path: 'user',
        name: 'platform-user',
        meta: {
            title: '用户',
            icon: '#axysxyonghu'
        },
        component: () => import(/* webpackChunkName: "platform-user" */ '@/views/platform/user/index.vue')
    },
    {
        path: 'authorization',
        name: 'platform-authorization',
        meta: {
            title: '授权',
            icon: '#axysxshouquan'
        },
        component: () => import(/* webpackChunkName: "platform-authorization" */ '@/views/platform/authorization/index.vue'),
    },
    {
        path: 'authrecord',
        name: 'platform-authrecord',
        meta: {
            parent: 'platform-authorization',
            hidden: true
        },
        component: () => import(/* webpackChunkName: "platform-authrecord" */ '@/views/platform/authorization/record/index.vue'),
    },
    {
        path: 'config',
        name: 'platform-config',
        redirect: '/config/threaten',
        component: markRaw(RouterTransition),
        meta: {
            title: '配置',
            icon: '#axysxpeizhi'
        },
        children: [
            {
                path: 'threaten',
                name: `config-threaten`,
                meta: {
                    title: '平台授权',
                },
                component: () => import(/* webpackChunkName: "config-threaten" */ '@/views/platform/config/threaten/index.vue'),
            },

            // {
            //     path: 'feature',
            //     name: `config-feature`,
            //     meta: {
            //         icon: '#ax-os-Windows',
            //         title: '特征库',
            //     },
            //     component: () => import(/* webpackChunkName: "config-feature" */ '@/views/platform/config/views/feature/index.vue'),
            // },

        ]
    },
    {
        path: 'setting',
        name: 'platform-setting',
        meta: {
            hidden: true
        },
        component: () => import(/* webpackChunkName: "platform-setting" */ '@/views/platform/setting/index.vue'),
    },
]
export default routes