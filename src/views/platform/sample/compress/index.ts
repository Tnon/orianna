/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-14 11:12:18
 * @LastEditTime: 2022-02-24 13:45:15
 */
import { FILETYPE } from '@/enums/fileType'
import { TableColumn } from '@/types/tableColumn'
import { createVNode, ref } from 'vue'
import { Router } from 'vue-router'

export const useColumns = (router: Router): TableColumn[] => [

    {
        title: '文件名',
        dataIndex: 'file_name',
        width: 150,
    },
    {
        title: '文件类型',
        dataIndex: 'file_type',
        width: 150,
        customRender: ({ text }) => FILETYPE['file-' + text]
    },
    {
        title: '文件数',
        dataIndex: 'file_num',
        width: 100,
    },
    {
        title: '系统环境',
        dataIndex: 'os_version',
        width: 200,
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
        width: 250,
        customRender: ({ record }) => {
            return createVNode('span', {
                style: {
                    cursor: 'pointer',
                    color: '#267EE5'
                },
                onClick: () => {
                    router.push({
                        name: 'platform-report',
                        query: {
                            id: record.id,
                            name: record.file_name
                        }
                    })
                }
            }, '查看报告')
        }
    },
]

