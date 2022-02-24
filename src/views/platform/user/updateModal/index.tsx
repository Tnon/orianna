/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-01-26 19:53:20
 * @LastEditTime: 2022-02-23 11:41:06
 */
import { editUsers, resetPWD } from '@/api/user'
import slotsForm from '@/components/slots-form'
import { updatePwd as updatePwdModal } from '@/components/updatePwd'
import { useModal } from '@/hooks'
import { pCompile } from '@/utils/urlUtils'
import { defineComponent, reactive } from 'vue'
import { useFormItems } from './columns'
import styles from './index.module.less'
export const updateModal = defineComponent({
  props: {
    record: {
      type: Object,
      required: true
    },
    refreshTable: {
      type: Function
    }
  },
  setup(props) {
    // 编辑信息
    const updateInfo = () => {
      useModal(
        {
          title: '编辑',
          contentProps: {
            disKeys: { account: true },
            colsMap: useFormItems(),
            fields: reactive(Object.assign({}, props.record))
          },
          handleOk: async ({ fields, validate }) => {
            await validate()
            await editUsers({
              id: fields.id,
              email: fields.email,
              dept: fields.dept
            })
            props.refreshTable!(true)
          }
        },
        slotsForm
      )
    }
    //修改密码
    const updatePwd = () => {
      useModal(
        {
          title: '重置密码',
          contentProps: {
            account: props.record.account,
            id: props.record.id
          },
          handleOk: async ({ fields, slotsForm }) => {
            await slotsForm.validate()
            const { code } = await resetPWD(
              Object.assign(
                {},
                fields,
                { old_password: pCompile(fields.old_password) },
                { new_password: pCompile(fields.new_password) },
                { repeat_password: pCompile(fields.repeat_password) }
              )
            )
            if (code) {
              return Promise.reject()
            }
            props.refreshTable!(true)
          }
        },
        updatePwdModal
      )
    }
    return () => (
      <div>
        <span
          class={[styles.ftColor, styles.mr40]}
          onClick={() => updateInfo()}>
          编辑
        </span>
        <span class={styles.ftColor} onClick={() => updatePwd()}>
          重置密码
        </span>
      </div>
    )
  }
})
