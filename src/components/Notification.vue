<script setup lang='ts'>
const languageList = ref([
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
])
const changeLanguage = (command: string | number | object) => {
  console.log('command', command)
}
</script>

<template>
  <el-dropdown @command="changeLanguage">
    <icon-ant-design-translation-outlined :style="{ width: 20, height: 20 }" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(item, index) of languageList" :key="index"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped></style>
