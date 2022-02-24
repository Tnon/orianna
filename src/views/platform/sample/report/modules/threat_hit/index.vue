<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-19 12:22:55
 * @LastEditTime: 2022-02-19 18:13:21
-->
<template>
  <!-- 衍生文件 start -->
  <Collapse class="collInfo">
    <template v-for="(item, key) in threatHit">
      <a-collapse-panel
        :header="moduleLableNames[key] + '(' + item.length + ')'"
        :class="key"
      >
        <template v-for="text in item">
          <div class="text">
            {{ text }}
          </div>
        </template>
      </a-collapse-panel>
    </template>
  </Collapse>
  <!-- 衍生文件 end -->
</template>
<script lang="ts">
import { Collapse } from 'ant-design-vue'
import { defineComponent, reactive, watchEffect } from 'vue'

export default defineComponent({
  props: {
    moduleLableNames: Object,
    moduleData: Object
  },
  components: {
    Collapse,
    [Collapse.Panel.name]: Collapse.Panel
  },
  setup(props) {
    const threatHit = reactive({
      high_risk: [], //高危情报命中
      medium_risk: [], //中危情报命中
      low_risk: []
    })
    watchEffect(() => {
      for (let k in threatHit) {
        threatHit[k] = props.moduleData![k] ?? []
      }
    })
    return {
      threatHit
    }
  }
})
</script>
<style lang="less" scoped>
.collInfo {
  border: none !important;
  .ant-collapse-item {
    margin-bottom: 10px;
    border: none;
    :deep(.ant-collapse-header) {
      padding: 10px !important;
      background: #fafafa;
    }
  }
  :deep(.ant-collapse-content) {
    border: 1px solid #fafafa;
    border-top: none;
    .ant-collapse-content-box {
      padding: 0 10px;
    }
  }
  .text {
    padding: 10px 0;
  }
  .high_risk {
    :deep(.ant-collapse-header) {
      background: rgba(255, 53, 67, 0.1);
      color: #ff3543;
    }
  }
  .medium_risk {
    :deep(.ant-collapse-header) {
      background: rgba(248, 165, 86, 0.1);
      color: #f8a556;
    }
  }
  .low_risk {
    :deep(.ant-collapse-header) {
      background: rgba(233, 218, 73, 0.1);
      color: #e9da49;
    }
  }
}
</style>
