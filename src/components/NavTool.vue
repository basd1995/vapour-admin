<script setup lang='ts'>
import UserAvatar from './UserAvatar.vue'
import Notification from './Notification.vue'
import Language from '~/components/Language.vue'
</script>

<template>
  <div class="vp-nav-tool">
    <Notification />
    <el-divider direction="vertical" />
    <UserAvatar />
    <el-divider direction="vertical" />
    <Language :size="1" />
  </div>
</template>

<style lang='scss' scoped>
.vp-nav-tool {
  display: flex;
  align-content: center;
}
</style>
