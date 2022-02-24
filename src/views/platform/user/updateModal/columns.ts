import { TableColumn } from "@/types/tableColumn";
import { validateByteLength, validateEmail } from "@/utils/reg";

export const useFormItems = (): TableColumn[] => [
    {
        title: '账号',
        dataIndex: 'account',
        formProps: {
            type: 'input',
            placeholder: '请输入账号',
        }
    },
    {
        title: '部门',
        dataIndex: 'dept',
        formProps: {
            type: 'input',
            placeholder: '请输入您的部门',
            rules: [
                { message: '长度最多32个字符', validator: validateByteLength(32) }
            ],
        }
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        formProps: {
            type: 'input',
            placeholder: '请输入邮箱',
            rules: [
                { message: '输入正确的邮箱', validator: validateEmail }
            ],
        }
    },
]