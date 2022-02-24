<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-19 12:22:54
 * @LastEditTime: 2022-02-19 18:10:59
-->
<template>
  <div class="module">
    <!-- 基本信息 start -->
    <div class="baseInfo">
      <div class="title">基本信息</div>
      <template v-for="(item, key) in basicInfo">
        <div class="nodes">
          <div class="label">{{ moduleLableNames[key] }}</div>
          <div class="value">{{ item }}</div>
        </div>
      </template>
    </div>
    <!-- 基本信息 end -->

    <!-- 一层折叠 start -->
    <Collapse class="collInfo">
      <template v-for="(item, key) in foldInfo">
        <a-collapse-panel :header="moduleLableNames[key]">
          <template v-for="text in item">
            <div class="text">
              {{ text }}
            </div>
          </template>
        </a-collapse-panel>
      </template>
    </Collapse>
    <!-- 一层折叠 end -->

    <!-- 二层折叠 start -->
    <Collapse class="collInfo">
      <a-collapse-panel :header="moduleLableNames['apis']">
        <template v-for="(subitem, subkey) in foldInfoPkg['apis']">
          <div class="formItems">
            <span class="label">{{ moduleLableNames[subkey] }}</span>
            <span class="value">{{ subitem }}</span>
          </div>
        </template>
      </a-collapse-panel>
    </Collapse>
    <!-- 一层折叠 end -->
  </div>
</template>
<script lang="ts">
import { Collapse } from 'ant-design-vue'
import { defineComponent, reactive, watchEffect } from 'vue'

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
    //基本信息
    const basicInfo = reactive({
      packer: '',
      unpack: '',
      crypt_alg: '',
      peheader_exp: ''
    })
    //一层折叠多条信息
    const foldInfo = reactive({
      startup: [],
      avname: [],
      mining: []
    })
    //二层折叠多条信息
    const foldInfoPkg = reactive({
      apis: {
        pos: '',
        apilist: '',
        description: ''
      }
    })
    watchEffect(() => {
      for (let k in basicInfo) {
        basicInfo[k] = props.moduleData![k] || '-'
      }
      for (let k in foldInfo) {
        foldInfo[k] = props.moduleData![k] ?? ['-']
      }
      for (let k in foldInfoPkg['apis']) {
        foldInfoPkg['apis'][k] = props.moduleData!['apis'][k] || '-'
      }
    })

    return {
      basicInfo,
      foldInfo,
      foldInfoPkg
    }
  }
})
</script>
<style lang="less" scoped>
.module {
  .baseInfo {
    .title {
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
    .text,
    .formItems {
      padding: 10px 0;
    }
    .formItems {
      display: flex;
      .label {
        flex: 300px 0 0;
        font-size: 14px;
        font-weight: 400;
        color: rgba(41, 48, 56, 0.85);
      }
    }
  }
}
</style>
