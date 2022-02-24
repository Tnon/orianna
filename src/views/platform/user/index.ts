/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-01-26 16:51:07
 * @LastEditTime: 2022-02-23 15:43:47
 */
import { roleType } from '@/components/role-type'
import { TableColumn } from '@/types/tableColumn'
import { createVNode } from 'vue'
import { updateModal } from './updateModal'
export const useColumns = (refreshTable): TableColumn[] => [
    {
        title: '序号',
        dataIndex: 'seq',
        width: 100,
    },
    {
        title: '租户',
        dataIndex: 'account',
        width: 200,
    },
    {
        title: '角色',
        dataIndex: 'role',
        width: 150,
        customRender: ({ text }) => createVNode(roleType, { text })
    },
    {
        title: '部门',
        dataIndex: 'dept',
        width: 150,
    },
    {
        title: '自动检测授权',
        dataIndex: 'auto_auth',
        width: 200,
    },
    {
        title: '专家检测授权',
        dataIndex: 'expert_auth',
        width: 200,
    },
    {
        title: '创建时间',
        dataIndex: 'create_time',
        width: 200,
    },
    {
        title: '处理',
        width: 200,
        customRender: ({ record }) => createVNode(updateModal, { record, refreshTable })
    },
]
