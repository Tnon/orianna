<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-19 12:22:52
 * @LastEditTime: 2022-02-19 18:01:38
-->
<template>
  <div class="module">
    <div class="title" v-if="moduleData.analyze_res">
      {{ moduleData.analyze_res }}
    </div>
    <Table
      :row-class-name="(_, index) => (index % 2 === 0 ? 'tableStriped' : null)"
      :columns="columns"
      class="singleTable"
      :dataSource="moduleData.engines"
      :pagination="false"
    />
  </div>
</template>
<script lang="ts">
import { Table } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    moduleData: Object
  },
  components: {
    Table
  },
  setup() {
    const columns = [
      {
        title: '防病毒引擎',
        dataIndex: 'name'
      },
      {
        title: '检测结果',
        dataIndex: 'value'
      }
    ]
    return {
      columns
    }
  }
})
</script>
<style lang="less" scoped>
.title {
  height: 32px;
  padding: 0 10px;
  background: rgba(255, 53, 67, 0.1);
  font-size: 14px;
  font-weight: 500;
  color: #ff3543;
  line-height: 32px;
  margin-bottom: 10px;
}
.module {
  :deep(.tableStriped) {
    background-color: #fafafa;
  }
}
</style>
