<script setup lang='ts'>
defineProps<{
  menus?: Array<any>
}>()
const hasChildren = (item: any) => {
  return item.children && !item.children.every((item: any) => item.meta.hidden)
}
</script>

<template>
  <template v-for="item in menus" :key="item.id">
    <el-menu-item v-if="!hasChildren(item)" :index="item.id">
      <el-icon v-if="item.meta.icon">
        <component :is="item.meta.icon" />
      </el-icon>
      {{ item.meta.title }}
    </el-menu-item>
    <el-sub-menu v-else :index="item.id">
      <template #title>
        <el-icon v-if="item.meta.icon">
          <component :is="item.meta.icon" />
        </el-icon>
        {{ item.meta.title }}
      </template>
      <Menus :menus="item.children" />
    </el-sub-menu>
  </template>
</template>

<style scoped></style>
