<script setup lang='ts'>
import Language from '~/components/Language.vue'
import useAppStore from '~/store/modules/app'
const appStore = useAppStore()
</script>

<template>
  <div class="vp-navbar">
    <div class="vp-collapse" @click="appStore.setMenuIsCollapse()">
      <icon-ep-expand v-if="appStore.getMenuIsCollapse" />
      <icon-ep-fold v-else />
    </div>
    <div class="vp-tool">
      <Language :size="1.2" />
      <el-dropdown>
        <el-avatar shape="square" size="small">
          曹
        </el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{ $t('navbar.dropdown.userProfile') }}</el-dropdown-item>
            <el-dropdown-item>{{ $t('navbar.dropdown.accountSetting') }}</el-dropdown-item>
            <el-dropdown-item>{{ $t('navbar.dropdown.signOut') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vp-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #ffffff;
  .vp-collapse, .vp-tool {
    display: flex;
    height: 100%;
    align-items: center;
  }
}
</style>
