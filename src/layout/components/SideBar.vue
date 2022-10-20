<script setup lang='ts'>
import sysApi from '~/api/sys/user-center-api'
import Menus from '~/components/Menus.vue'
import useAppStore from '~/store/modules/app'
import useThemeStore from '~/store/modules/theme'

const appStore = useAppStore()
const themeStore = useThemeStore()

const menu = ref<any>([])
const getMenu = async () => {
  const data = await sysApi.userLoginMenu()
  console.error('res', data)
  menu.value = data[0].children
}
getMenu()
</script>

<template>
  <div class="vp-side-bar">
    <div class="vp-logo">
      <img src="/assets/logo.png" alt="">
      <span v-if="!appStore.getMenuIsCollapse" class="vp-name">{{ $t('app.name') }}</span>
    </div>
    <div class="vp-menu">
      <el-menu
        class="menu" :collapse="appStore.getMenuIsCollapse"
        :background-color="themeStore.getSideBarTheme.menuBg"
        :text-color="themeStore.getSideBarTheme.menuText"
        :active-text-color="themeStore.getSideBarTheme.menuActiveText"
      >
        <Menus :menus="menu" />
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vp-side-bar {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .vp-logo {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 24px;
      height: 24px;
    }
    .vp-name {
      margin-left: 15px;
      font-weight: bold;
      color: #ffffff;
    }
  }
  .vp-menu {
    flex: 1;
    overflow-y: scroll;
    .el-menu {
      border-right: 0px;
    }
    .menu:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
}
</style>
