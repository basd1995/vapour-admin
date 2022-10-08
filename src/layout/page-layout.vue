<script setup lang='ts'>
import Navbar from './components/Navbar.vue'
import Menus from '~/components/Menus.vue'
import { menuRes } from '~/mock/menu'
const menu = ref<any>([])
const getMenu = () => {
  const res = menuRes
  if (res.code === 200)
    menu.value = res.data[0].children
}
getMenu()
</script>

<template>
  <el-container class="layout">
    <el-aside class="layout-aside">
      <el-menu>
        <Menus :menus="menu" />
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <Navbar />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
}
.layout-aside {
  background: #000;
  height: 100%;
  overflow-y: scroll;
}
.layout-header {
  padding: 0;
}
</style>
