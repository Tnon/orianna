<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-19 12:22:52
 * @LastEditTime: 2022-02-19 18:12:05
-->
<template>
  <div class="module">
    <div class="title">
      {{ moduleData.analyze_res || '-' }}
    </div>
    <!-- 基本信息 start -->
    <div class="baseInfo">
      <div class="header">各类敏感行为</div>
      <template v-for="(item, key) in basicInfo['behavior_catagory']">
        <div class="nodes">
          <div class="label">{{ moduleLableNames[key] }}</div>
          <div class="value">{{ item }}</div>
        </div>
      </template>
    </div>
    <!-- 基本信息 end -->
    <!-- 衍生文件 start -->
    <Collapse class="collInfo">
      <a-collapse-panel header="衍生文件">
        <template v-for="text in deriveFile">
          <div class="text">
            {{ text }}
          </div>
        </template>
      </a-collapse-panel>
    </Collapse>
    <!-- 衍生文件 end -->
  </div>
</template>
<script lang="ts">
import { Collapse } from 'ant-design-vue'
import { defineComponent, reactive, ref, watchEffect } from 'vue'
export default defineComponent({
  props: {
    moduleData: Object,
    moduleLableNames: Object
  },
  components: {
    Collapse,
    [Collapse.Panel.name]: Collapse.Panel
  },
  setup(props) {
    //各类敏感行为
    const basicInfo = reactive({
      behavior_catagory: {
        process: 1,
        reg: 1,
        file: 1,
        network: 1,
        other: 1
      }
    })
    //衍生文件
    const deriveFile = ref([])
    watchEffect(() => {
      for (let k in basicInfo['behavior_catagory']) {
        basicInfo['behavior_catagory'][k] =
          props.moduleData!['behavior_catagory'][k]
      }
      deriveFile.value = props.moduleData!['derive_file'] ?? ['-']
    })
    return {
      basicInfo,
      deriveFile
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
  .baseInfo {
    .header {
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 500;
      color: rgba(41, 48, 56, 0.85);
    }
    .nodes {
      display: flex;
      align-items: center;
      padding: 10px 0;
      .label {
        flex: 300px 0 0;
        font-size: 14px;
        font-weight: 400;
        color: rgba(41, 48, 56, 0.85);
      }
    }
  }
  .collInfo {
    border: none !important;

    margin-top: 20px;
    .ant-collapse-item {
      margin: 10px 0;
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
  }
}
</style>
