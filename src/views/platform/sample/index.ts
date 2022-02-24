/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-01-25 20:33:19
 * @LastEditTime: 2022-02-23 15:42:09
 */
import { ViewReport } from '@/components/ViewReport'
import { FILETYPE } from '@/enums/fileType'
import { TableColumn } from '@/types/tableColumn'
import { createVNode } from 'vue'
import { Router } from 'vue-router'
export const useColumns = (router: Router): TableColumn[] => [

    {
        title: '租户',
        dataIndex: 'tenant',
        width: 150,
    },
    {
        title: '文件名',
        dataIndex: 'file_name',
        width: 300,
    },
    {
        title: '文件类型',
        dataIndex: 'file_type',
        width: 150,
        customRender: ({ text }) => FILETYPE['file-' + text]
    },
    {
        title: '系统环境',
        dataIndex: 'os_version',
        width: 150,
        customRender: () => 'win7 32位'
    },
    {
        title: '上传时间',
        dataIndex: 'upload_time',
        width: 200,
    },
    {
        title: '风险值',
        dataIndex: 'risk_value',
        width: 100,
    },
    {
        title: '处理',
        width: 100,
        dataIndex: 'is_compress',
        customRender: ({ text, record }) =>
            createVNode(ViewReport,
                {
                    sample_id: record.id,
                    is_compress: text,
                    sampleName: record.file_name
                }),

    },
]