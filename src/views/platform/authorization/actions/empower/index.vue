<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-01-27 10:21:45
 * @LastEditTime: 2022-02-24 11:39:26
-->
<template>
  <div>
    <div class="formItem">
      <span class="label">自动检测授权</span>
      <span class="item">
        <span class="preLabel">追加</span>
        <a-input-number v-model:value="auto_change" class="iptNumber" />
        <span class="sufLabel">月</span>
      </span>
    </div>
    <div class="formItem">
      <span class="label">专家分析授权</span>
      <span class="item">
        <span class="preLabel">追加</span>
        <a-input-number v-model:value="expert_change" class="iptNumber" />
        <span class="sufLabel">次</span>
      </span>
    </div>
    <div class="formItem">
      <span class="label">备注</span>
      <span class="item">
        <a-textarea
          :autoSize="{ minRows: 6, maxRows: 6 }"
          class="iptNumber"
          v-model:value="remark"
          show-count
          :maxlength="200"
        />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Input, InputNumber } from 'ant-design-vue'
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  components: {
    [InputNumber.name]: InputNumber,
    [Input.TextArea.name]: Input.TextArea
  },
  setup() {
    const state = reactive({
      auto_change: 0,
      expert_change: 0,
      remark: ''
    })
    return {
      ...toRefs(state),
      state
    }
  }
})
</script>

<style scoped lang="less">
.formItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  .label {
    flex: 25% 0 0;
  }
  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iptNumber {
      flex: 1;
    }
    .preLabel {
      margin-right: 10px;
    }
    .sufLabel {
      margin-left: 10px;
    }
  }
}
</style>
