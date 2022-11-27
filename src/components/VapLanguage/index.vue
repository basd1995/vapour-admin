<script setup lang='ts'>
import useLocale from '~/hooks/locale'
defineProps<{
  size?: number
}>()
const { changeLocale } = useLocale()
const languageList = ref([
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
])
const changeLanguage = (command: string | number | object) => {
  changeLocale(command as string)
}
</script>

<template>
  <el-dropdown @command="changeLanguage">
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
