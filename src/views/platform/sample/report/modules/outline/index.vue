<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-19 12:22:53
 * @LastEditTime: 2022-02-23 14:10:42
-->
<template>
  <div>
    <!-- 样本基本信息 start -->
    <div class="basicInfo">
      <!-- 分数 start -->
      <riskCount :count="count" class="riskcount" />
      <!-- 分数 end -->
      <!-- 样本详情 start -->
      <div class="report">
        <div class="formItem" v-for="(item, key) in detailMsg" :key="key">
          <div class="label">{{ moduleLableNames[key] }}</div>
          <div class="value">{{ item }}</div>
        </div>
      </div>
      <!-- 样本详情 end -->
    </div>
    <!-- 样本基本信息 end -->
    <!-- 折叠 start -->
    <template v-for="(item, key) in foldMsg">
      <foldInfo :labelName="moduleLableNames[key]" :record="item" />
    </template>
    <!-- 折叠 end -->
  </div>
</template>

<script lang="ts">
import { riskCount } from '@/components/risk-count'
import { defineComponent, reactive, ref, watchEffect } from 'vue'
import foldInfo from '../../components/fold'
export default defineComponent({
  components: {
    riskCount,
    foldInfo
  },
  props: {
    moduleData: Object,
    moduleLableNames: Object
  },
  setup(props) {
    const count = ref(0)
    //基本信息
    const detailMsg = reactive({
      sample_name: '',
      check_time: '',
      sample_ext: '',
      sample_size: '',
      run_env: '',
      MD5: '',
      SHA1: '',
      SHA256: '',
      SSDEEP: '',
      SHELL: '',
      sample_tag: ''
    })
    //折叠信息
    const foldMsg = reactive({
      harm_info: [],
      trans_mode: [],
      impact_estimate: [],
      vulnerability: [],
      handle_suggest: []
    })
    //犹豫外部为异步，需要按需操作
    watchEffect(() => {
      for (let k in detailMsg) {
        detailMsg[k] = props.moduleData![k] || '-'
      }
      for (let k in foldMsg) {
        foldMsg[k] = props.moduleData![k] ?? [{ title: '-', info: '-' }]
      }
      count.value = ~~props.moduleData!.sample_score
    })
    return {
      detailMsg,
      foldMsg,
      count
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
}
</style>
