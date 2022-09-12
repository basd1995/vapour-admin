<script setup lang='ts'>
import Banner from './components/banner.vue'
import useLocale from '~/hooks/locale'
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
  <div class="login-container">
    <div class="logo">
      <img
        alt="logo"
        src="/assets/logo.png"
      >
      <div class="logo-text">
        Vapour-admin
      </div>
    </div>
    <Banner />
    <div class="content">
      <div class="language">
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
      </div>
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  height: 100vh;
  .banner {
    width: 550px;
    background: linear-gradient(150deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .language {
    position: absolute;
    top: 20px;
    right: 60px;
    z-index: 1;
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: #FFFFFF;

  img {
    width: 24px;
    margin-right: 10px;
  }

  &-text {
    margin-right: 4px;
    margin-left: 4px;
    color: var(--color-fill-1);
    font-size: 20px;
  }
}
</style>
