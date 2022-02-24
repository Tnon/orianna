<template>
  <div>
    <!-- 平台配置 start -->
    <!-- <platConfig /> -->
    <!-- 平台配置 end -->

    <!-- 平台授权 start -->
    <platAuth />
    <!-- 平台配置 end -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { platConfig } from './platConfig'
import { platAuth } from './platAuth'
export default defineComponent({
  components: {
    platConfig,
    platAuth
  }
})
</script>

<style lang="less" scoped></style>
