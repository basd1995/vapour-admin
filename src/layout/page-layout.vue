<script setup lang='ts'>
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
import AppMain from './components/AppMain.vue'
import useAppStore from '~/store/modules/app'
import useThemeStore from '~/store/modules/theme'
const appStore = useAppStore()
const themeStore = useThemeStore()
</script>

<template>
  <el-container class="vp-layout">
    <el-aside
      class="vp-layout-aside"
      :style="{ backgroundColor: themeStore.getSideBarTheme.menuBg }"
      :class="appStore.getMenuIsCollapse ? 'hidden-aside' : ''"
    >
      <SideBar />
    </el-aside>
    <el-container>
      <el-header class="vp-layout-header">
        <Navbar />
      </el-header>
      <el-main>
        <AppMain />
      </el-main>
      <el-footer class="vp-layout-footer">
        ⓒ Copyright Vapour 2022 Created By Caosong
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.vp-layout {
  width: 100%;
  height: 100%;
  .vp-layout-aside {
    width: 200px;
    height: 100%;
    transition: width 0.4s;
  }
  .hidden-aside {
    width: 64px;
    transition: width 0.4s;
  }
  .vp-layout-header {
    padding: 0;
    border-bottom: 1px solid #eee;
  }
  .vp-layout-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666666;
    font-size: 12px;
  }
}
</style>
