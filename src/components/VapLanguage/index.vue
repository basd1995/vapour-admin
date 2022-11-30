<script setup lang='ts'>
import useLanguage from '~/hooks/locale'

defineProps<{
  size?: number
}>()
const { setLanguage } = useLanguage()
const languageList = ref([
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
])
</script>

<template>
  <el-dropdown @command="setLanguage">
    <icon-ant-design-translation-outlined />
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
