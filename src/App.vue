<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import useLanguage from '~/hooks/locale'

const { currentLanguage } = useLanguage()
const locale = computed(() => currentLanguage.value === 'zh-CN' ? zhCn : en)
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
  <!-- <Workspace /> -->
</template>
