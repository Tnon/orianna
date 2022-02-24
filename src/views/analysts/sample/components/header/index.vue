<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-14 13:48:00
 * @LastEditTime: 2022-02-24 12:13:33
-->
<template>
  <div class="header">
    <div class="flexcenter" @click="goBack">
      <custom-icon class="backIcon" type="#axysxxiangzuo" />
      <span class="name">自动分析报告：{{ sampleName }}</span>
    </div>
    <a-button class="download" @click="downloadSample">样本下载</a-button>
  </div>
</template>
<script lang="ts">
import { useModal } from '@/hooks'
import { exportExpertFileNoToken } from '@/utils/tools'
import { createVNode, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ExclamationCircleFilled } from '@ant-design/icons-vue'
export default defineComponent({
  props: {
    sampleName: String,
    sample_path: String
  },
  components: {
    ExclamationCircleFilled
  },
  setup(props) {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }

    const downloadSample = () => {
      useModal(
        {
          title: '提示',
          wrapClassName: 'noticeModal',
          handleOk: () => {
            exportExpertFileNoToken(props.sample_path!)
          }
        },

        createVNode('span', null, [
          createVNode(ExclamationCircleFilled, {
            style: {
              color: '#faad14',
              fontSize: '18px',
              marginRight: '10px'
            }
          }),
          '样本可能具有风险，请谨慎下载，解压密码：QueRenFengXian@'
        ])
      )
    }
    return {
      goBack,
      downloadSample
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
