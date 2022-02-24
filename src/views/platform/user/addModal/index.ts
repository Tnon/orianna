/*
 * @Author: Delavin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-08-16 10:05:53
 * @LastEditTime: 2021-12-21 12:17:44
 */
import { reactive } from 'vue'
import addModal from './index.vue'
import { TableColumn } from '@/types/tableColumn'
import { checkStrong } from '@/utils/tools'
import { validateAccount, validateByteLength, validateEmail } from '@/utils/reg'

//表单数据
const state = reactive<{
    formData: any,
}>({
    formData: {},
})
export const pwdLevelMode = reactive({
    low: false,
    middle: false,
    high: false,
    level: 0
})
export const initPwdValidate = () => {
    pwdLevelMode.low = false
    pwdLevelMode.middle = false
    pwdLevelMode.high = false
    pwdLevelMode.level = 0
}
const validatePWD = (_, value) => {
    const results = checkStrong(value ?? '', state.formData.account || '')
    Object.assign(pwdLevelMode, results)
    if (pwdLevelMode.level === 3) {
        return Promise.resolve()
    } else {
        return Promise.reject()
    }
}
const validatePWDCheck = (a, value, c, d) => {
    if (value !== state.formData.password) {
        return Promise.reject()
    }
    return Promise.resolve()
}

const useFormItems = (): TableColumn[] => [
    {
        title: '账号',
        dataIndex: 'account',
        formProps: {
            type: 'input',
            placeholder: '请输入账号',
            rules: [
                { required: true, message: '长度为1-20个数字或字母', validator: validateAccount },
            ],
        }
    },
    {
        title: '密码',
        dataIndex: 'password',
        formProps: {
            type: 'password',
            placeholder: '请输入密码',
            mode: pwdLevelMode,
            rules: [
                { required: true, message: '请输入正确的密码', validator: validatePWD }
            ],
        },

    },
    {
        title: '密码确认',
        dataIndex: 'repeat_password',
        formProps: {
            type: 'password',
            placeholder: '请再次输入密码',
            rules: [
                { required: true, message: '两次输入的密码不一致', validator: validatePWDCheck }
            ],
        }
    },
    {
        title: '角色',
        dataIndex: 'role',
        formProps: {
            type: 'radio',
            options: [
                {
                    label: '系统管理员',
                    value: 1
                },
                {
                    label: '安全分析员',
                    value: 2
                }
            ],
            rules: [
                { required: true, message: '请选择管理员角色', type: 'number' },
            ],
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
export { addModal, useFormItems, state }