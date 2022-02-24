<template>
  <div class="inputBtn">
    <a-input-number
      :type="formItem.type"
      :placeholder="formItem.placeholder"
      v-model:value="modelValue"
      :disabled="disKeys[dataIndex] || disabled"
    />
    <slot v-if="formItem.extraSlot" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { InputNumber } from 'ant-design-vue'
import { FormItem } from '@/types/schema'
export default defineComponent({
  name: 'formInput',
  props: {
    formItem: {
      // 表单项
      type: Object as PropType<FormItem>,
      default: () => ({})
    },
    disKeys: Object,
    dataIndex: String,
    disabled: Boolean,
    value: undefined as any // 表单项值
  },
  components: {
    [InputNumber.name]: InputNumber
  },
  setup(props, { emit }) {
    const modelValue = computed({
      get: () => props.value,
      set: (val) => emit('update:value', val)
    })
    return {
      modelValue
    }
  }
})
</script>
<style lang="less" scoped>
.inputBtn {
  display: flex;
  .btn {
    margin-left: 20px;
  }
  ::v-deep(.ant-input-number) {
    flex: 1;
  }
}
</style>
