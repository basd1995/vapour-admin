<script setup lang='ts'>
// import { useI18n } from 'vue-i18n'

const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
// const { t } = useI18n()
</script>

<template>
  <div class="navbar">
    <el-dropdown>
      <el-avatar shape="square" size="default" :src="squareUrl" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{ $t('navbar.dropdown.userProfile') }}</el-dropdown-item>
          <el-dropdown-item>{{ $t('navbar.dropdown.accountSetting') }}</el-dropdown-item>
          <el-dropdown-item>{{ $t('navbar.dropdown.signOut') }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: aliceblue;
}
</style>
