<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

// const toggle = () => {
//   language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
// }
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
  <!-- <Workspace /> -->
</template>
