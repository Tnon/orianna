<!--
 * @Author: Delavin.TnT
 * @LastEditors: Delavin.TnT
 * @Date: 2021-09-26 12:59:32
 * @LastEditTime: 2021-10-19 09:59:58
-->
<template>
  <div>
    <Badge
      :status="online === ONLINESTATUS.ONLINE ? 'processing' : 'default'"
      :color="online === ONLINESTATUS.ONLINE ? '#267EE5' : '#eee'"
    />
    <span class="online" v-if="online === ONLINESTATUS.ONLINE"> 已连接 </span>
    <span class="offline" v-else>未连接</span>
  </div>
</template>

<script lang="ts" setup>
import { ONLINESTATUS } from '@/enums/statusEnum'
import { PropType } from '@vue/runtime-core'
import { Badge } from 'ant-design-vue'
defineProps({
  online: Number as PropType<ONLINESTATUS>
})
</script>

<style lang="less" scoped>
.online {
  color: #267ee5;
}
.offline {
  color: rgba(0, 0, 0, 0.45);
}
</style>
