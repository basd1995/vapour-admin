<script setup lang='ts'>
import type { FormInstance, FormRules } from 'element-plus'
import { useI18n } from 'vue-i18n'
import loginApi from '~/api/auth/login-api'
import sysApi from '~/api/sys/user-center-api'
import router from '~/router'
import { useUserStore } from '~/store/modules/user'
import { setItem } from '~/utils/storage'

// const router = useRouter()
const { t } = useI18n()
const { setToken } = useUserStore()

// form表单数据
const formRef = ref<FormInstance>()
const form = reactive({ username: 'admin', password: 'admin' })

// 校验规则
const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

const loginLoading = ref(false)

const submitLogin = async () => {
  // 表单校验
  const validate = await formRef.value!.validate().catch(() => {})
  if (!validate)
    return

  loginLoading.value = true

  // 提交表单
  const loginData = { ...form, validCode: '', validCodeReqNo: '' }

  // 获取token
  const token = await loginApi.login(loginData).finally(() => loginLoading.value = false)
  setToken(token)

  // 获取登录的用户信息
  const loginUser = await loginApi.getLoginUser().finally(() => loginLoading.value = false)
  setItem('USER_INFO', loginUser)

  // 设置用户菜单
  const menu = await sysApi.userLoginMenu().finally(() => loginLoading.value = false)
  setItem('MENU', menu)

  router.push('/dashboard')
}

const register = () => {
  router.push('/register')
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-title">
      {{ $t('login.form.title') }}
    </div>
    <div class="login-sub-title">
      {{ $t('login.form.subTitle') }}
    </div>
    <div class="login-error-msg" />
    <el-form ref="formRef" :model="form" :rules="rules">
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          :placeholder="t('login.form.userName.placeholder')"
        >
          <template #prefix>
            <icon-ep-user />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          :placeholder="t('login.form.password.placeholder')"
          type="password"
        >
          <template #prefix>
            <icon-ep-key />
          </template>
        </el-input>
      </el-form-item>
      <el-space class="login-actions" :size="16" direction="vertical" fill>
        <div class="login-password-actions">
          <el-checkbox>{{ $t('login.form.rememberPassword') }}</el-checkbox>
          <el-button link>
            {{ $t('login.form.forgetPassword') }}
          </el-button>
        </div>
        <el-button type="primary" :loading="loginLoading" @click="submitLogin">
          {{ $t('login.form.login') }}
        </el-button>
        <el-button link long class="login-register-btn" @click="register">
          {{ $t('login.form.register') }}
        </el-button>
      </el-space>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
  width: 320px;
  .login-title {
    color: #1d2129;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .login-sub-title {
    color: #86909c;
    font-size: 16px;
    line-height: 24px;
  }

  .login-error-msg {
    height: 32px;
    color: red;
    line-height: 32px;
  }

  .login-actions {
    width: 100%;
  }

  .login-password-actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>
