<!--
 * @Author: Delavin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-06-10 16:33:33
 * @LastEditTime: 2022-01-24 16:44:38
-->
<template>
  <a-layout>
    <a-layout-header>
      <!--      网站logo start-->
      <layout-header />
      <!--      网站logo end-->
    </a-layout-header>
    <a-layout class="layout" v-if="toogleFlag">
      <a-layout-sider class="layout-sider" :trigger="null">
        <!--      侧边菜单栏start-->
        <aside-menu />
        <!--      侧边菜单栏end-->
      </a-layout-sider>
      <!--      内容区域start-->
      <a-layout-content class="layout-content">
        <div class="tabsview">
          <router-view v-slot="{ Component }">
            <transition name="zoom-fade" mode="out-in" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </a-layout-content>
      <!--      内容区域end-->
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref, provide, nextTick } from 'vue'
import { Layout } from 'ant-design-vue'
import Logo from './logo/index.vue'
import AsideMenu from './menu/menu.vue'
import { layoutHeader } from './header'
export default defineComponent({
  name: 'Layout',
  components: {
    AsideMenu,
    Logo,
    layoutHeader,
    [Layout.name]: Layout,
    [Layout.Content.name]: Layout.Content,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Header.name]: Layout.Header
  },
  setup() {
    const toogleFlag = ref<boolean>(true)
    const reload = async () => {
      toogleFlag.value = false
      await nextTick()
      toogleFlag.value = true
    }
    provide('reload', reload)
    return {
      toogleFlag
    }
  }
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: calc(100vh - 60px);
  .ant-layout {
    min-width: 1080px;
    background: #f5f8f9;
  }
  .layout-sider {
    padding-top: 10px;
    flex: 0 0 220px !important;
    max-width: 220px !important;
    min-width: 220px !important;
    width: 220px !important;
  }
  .layout-content {
    flex: auto;
    overflow: auto;
    background: #f5f8f9;
    .tabsview {
      min-width: 1300px;
      overflow: hidden;
    }
  }
}
</style>
