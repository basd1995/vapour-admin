<script setup lang='ts'>
</script>

<template>
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
</template>

<style lang='scss' scoped></style>
