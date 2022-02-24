<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-01-28 16:50:24
 * @LastEditTime: 2022-02-24 13:47:31
-->
<template>
  <div>
    <a-form
      :model="formState"
      labelAlign="left"
      :labelCol="{ style: { width: '25%' } }"
    >
      <a-form-item label="风险值" name="result">
        <a-input-number v-model:value="result" />
        <span class="tips">请输入0 - 100区间内的数值</span>
      </a-form-item>
      <a-form-item label="分析概要" name="summary">
        <a-textarea
          v-model:value="summary"
          :autoSize="{ minRows: 6, maxRows: 6 }"
          show-count
          :maxlength="200"
        />
      </a-form-item>
      <a-form-item label="处置建议" name="suggestion">
        <a-textarea
          v-model:value="formState.suggestion"
          :autoSize="{ minRows: 6, maxRows: 6 }"
          show-count
          :maxlength="200"
        />
      </a-form-item>
      <a-form-item label="详细分析" name="file">
        <uploadFile
          :beforeUpload="beforeUpload"
          :showUploadList="true"
          :remove="handleRemove"
        >
          <a-button class="upload"> 上传附件 </a-button>
        </uploadFile>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { InputNumber, Input } from 'ant-design-vue'
import uploadFile, { FileInfo } from '@/components/upload-file'
import { Form } from 'ant-design-vue'

const useForm = Form.useForm
export default defineComponent({
  components: {
    [InputNumber.name]: InputNumber,
    [Input.TextArea.name]: Input.TextArea,
    uploadFile
  },
  setup() {
    const formState = reactive({
      result: 0,
      summary: '',
      suggestion: '',
      file: undefined
    })
    const rulesRef = reactive({
      result: [
        {
          required: true,
          message: '请输入0 - 100区间内的数值',
          min: 0,
          max: 100,
          type: 'number'
        }
      ]
    })
    const { validate } = useForm(formState, rulesRef)
    const beforeUpload = (file: FileInfo) => {
      formState.file = file as any
      return false
    }
    const handleRemove = () => {
      formState.file = undefined
    }
    return {
      ...toRefs(formState),
      handleRemove,
      formState,
      beforeUpload,
      validate
    }
  }
})
</script>

<style scoped>
.tips {
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 10px;
}
</style>
