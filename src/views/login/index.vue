<script setup lang='ts'>
import Banner from './components/Banner.vue'
import LoginForm from './components/LoginForm.vue'
import Language from '~/components/VapLanguage/index.vue'
import Footer from '~/components/Footer.vue'
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
        <Language :size="1.2" />
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
