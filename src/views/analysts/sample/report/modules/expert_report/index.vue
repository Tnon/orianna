<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-19 12:22:53
 * @LastEditTime: 2022-02-23 10:04:49
-->
<template>
  <div>
    <!-- 样本基本信息 start -->
    <div class="basicInfo">
      <!-- 分数 start -->
      <riskCount :count="count" class="riskcount" />
      <!-- 分数 end -->
      <div class="expertModule">
        <!-- 专家分析 start -->
        <div class="report">
          <div class="formItem" v-for="(item, key) in detailMsg" :key="key">
            <div class="label">{{ moduleLableNames[key] }}</div>
            <div class="value">{{ item }}</div>
          </div>
        </div>
        <!-- 专家分析 end -->
        <a-button
          class="downLoadBtn"
          type="primary"
          v-if="moduleData.detail_path"
          @click="downloadFile"
        >
          下载专家分析附件
        </a-button>
      </div>
    </div>
    <!-- 样本基本信息 end -->
  </div>
</template>

<script lang="ts">
import { riskCount } from '@/components/risk-count'
import { exportExpertFileNoToken } from '@/utils/tools'
import { defineComponent, reactive, ref, watchEffect } from 'vue'
export default defineComponent({
  components: {
    riskCount
  },
  props: {
    moduleData: Object,
    moduleLableNames: Object
  },
  setup(props) {
    const count = ref(0)
    //基本信息
    const detailMsg = reactive({
      analyze_summary: '',
      handle_suggestion: ''
    })
    //犹豫外部为异步，需要按需操作
    watchEffect(() => {
      for (let k in detailMsg) {
        detailMsg[k] = props.moduleData![k] || '-'
      }

      count.value = ~~props.moduleData!.expert_value
    })
    //下载专家附件
    const downloadFile = () => {
      exportExpertFileNoToken(props.moduleData!.detail_path)
    }
    return {
      detailMsg,
      count,
      downloadFile
    }
  }
})
</script>
<style lang="less" scoped>
.basicInfo {
  display: flex;
  align-items: flex-start;
  .riskcount {
    margin-right: 40px;
    flex: 120px 0 0;
  }
  .report {
    flex: 1;
    .formItem {
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;
      font-size: 14px;
      font-weight: 400;
      color: rgba(41, 48, 56, 0.85);
      .label {
        flex: 96px 0 0;
      }
      .value {
        word-break: break-all;
      }
    }
  }
  .expertModule {
    display: flex;
    flex: 1;
    .downLoadBtn {
      margin-top: -45px;
    }
  }
}
</style>
