<template>
  <div class="content" id="scrollDom">
    <reportHeader :sampleName="sample_name" />
    <div class="reportDetail">
      <!-- 目录 start -->
      <div class="menu">
        <Affix :offset-top="10" :target="getTarget">
          <template v-for="(item, key) in jsonData">
            <div @click="scrollTo(key)" class="menuItems">
              {{ labelNames[key]['labelName'] }}
            </div>
          </template>
        </Affix>
        <!-- 目录 end -->
      </div>
      <!-- 报告详情 start -->
      <div class="main">
        <template v-for="(item, key) in jsonData">
          <moduleHeader :id="key" />
          <component
            :is="key"
            :moduleLableNames="labelNames[key]"
            class="moduleContent"
            :moduleData="item"
          />
        </template>
      </div>
      <!-- 报告详情 end -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Affix } from 'ant-design-vue'
import { labelNames } from './index'
import components from './modules'
import { moduleHeader } from './components/header'
import { useRoute, useRouter } from 'vue-router'
import { getReportInfo } from '@/api/sampleCloud'
import reportHeader from '../components/header'
export default defineComponent({
  components: {
    ...components,
    reportHeader,
    moduleHeader,
    Affix
  },
  setup() {
    const currentRouter = useRoute(),
      router = useRouter()
    //报告的json
    const jsonData = ref({})
    //锚点跳转
    const scrollTo = (id) => {
      let anchorElement = document.getElementById(id)
      if (anchorElement) {
        anchorElement.scrollIntoView()
      }
    }
    //样本名称
    const sample_name = ref(currentRouter.query.name)
    //fix容器
    const getTarget = () => document.getElementById('scrollDom')
    //获取报告详情
    const getReport = async () => {
      if (currentRouter.query.id) {
        const { auto_report, expert_value, expert_report, detail_path } =
          await getReportInfo({
            id: currentRouter.query.id
          })
        //自动分析分值大于-1 则有专家分析
        if (expert_value !== -1) {
          jsonData.value = {
            expert_report: {
              ...expert_report,
              detail_path,
              expert_value
            },
            ...JSON.parse(auto_report)
          }
        } else {
          jsonData.value = JSON.parse(auto_report)
        }
      } else {
        router.push({
          name: 'platform-sample'
        })
      }
    }
    getReport()
    return {
      scrollTo,
      jsonData,
      getTarget,
      sample_name,
      labelNames
    }
  }
})
</script>

<style lang="less" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 80px);
  overflow: auto;
  .reportDetail {
    display: flex;
    .menu {
      flex: 200px 0 0;
      .menuItems {
        height: 40px;
        line-height: 40px;
        padding-left: 16px;
        margin: 10px 0;
        font-size: 14px;
        font-weight: 400;
        color: rgba(41, 48, 56, 0.85);
        cursor: pointer;
      }
    }
    .main {
      flex: 1;
      .node {
        height: 400px;
        border: 1px solid #eee;
      }
    }
  }
  .moduleContent {
    margin-bottom: 20px;
    background: #fff;
    padding: 0 20px 20px 20px;
  }
}
</style>
