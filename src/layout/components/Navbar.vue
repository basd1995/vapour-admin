<script setup lang='ts'>
import NavTool from '~/components/NavTool.vue'
import useAppStore from '~/store/modules/app'
const appStore = useAppStore()
</script>

<template>
  <div class="vp-navbar">
    <div class="vp-collapse" @click="appStore.setMenuIsCollapse()">
      <icon-ep-expand v-if="appStore.getMenuIsCollapse" />
      <icon-ep-fold v-else />
    </div>
    <NavTool class="vp-tool" />
  </div>
</template>

<style lang="scss" scoped>
.vp-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #ffffff;
  .vp-collapse, .vp-tool {
    display: flex;
    height: 100%;
    align-items: center;
  }
}
</style>
