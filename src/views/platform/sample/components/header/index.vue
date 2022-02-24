<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-14 13:48:00
 * @LastEditTime: 2022-02-23 15:07:27
-->
<template>
  <div class="header">
    <div class="flexcenter" @click="goBack">
      <custom-icon class="backIcon" type="#axysxxiangzuo" />
      <span class="name">自动分析报告：{{ sampleName }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    sampleName: String,
    sample_path: String
  },
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
  }
})
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .backIcon {
    margin-right: 10px;
    font-size: 24px !important;
  }
  .flexcenter {
    font-size: 18px;
    font-weight: 500;
    color: rgba(41, 48, 56, 0.85);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
