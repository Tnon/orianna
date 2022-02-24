<!--
 * @Author: Delavin.TnT
 * @LastEditors: Delavin.TnT
 * @Date: 2021-08-16 10:05:59
 * @LastEditTime: 2021-10-08 16:30:22
-->
<template>
  <slots-form ref="slotRef" :colsMap="formItems" :fields="formData" />
</template>
<script lang="ts">
import { defineComponent, unref, toRefs, ref, onBeforeUnmount } from 'vue'
import { useFormItems, state, initPwdValidate } from './index'
import slotsForm from '@/components/slots-form'
export default defineComponent({
  components: {
    slotsForm
  },
  setup() {
    const formItems = useFormItems()
    const slotRef = ref<any>(null)
    onBeforeUnmount(() => {
      initPwdValidate()
      unref(slotRef).resetFields()
    })
    return {
      ...toRefs(state),
      formItems,
      slotRef,
      state
    }
  }
})
</script>
