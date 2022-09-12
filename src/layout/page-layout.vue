<script setup lang='ts'>
import Navbar from './components/Navbar.vue'
import Menu from '~/components/Menu.vue'
</script>

<template>
  <el-container class="layout">
    <el-aside class="layout-aside">
      <Menu />
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
