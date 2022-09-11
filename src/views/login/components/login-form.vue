<script setup lang='ts'>
import type { FormInstance, FormRules } from 'element-plus'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const { t } = useI18n()
const formRef = ref<FormInstance>()
const form = reactive({
  username: '',
  password: '',
})
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})
const submitLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    console.error(valid)
    if (valid) {
      console.error('submit!', fields)
      router.push('/dashboard')
    }

    else { console.error('error submit!', fields) }
  })
}
</script>

<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">
      {{ $t('login.form.title') }}
    </div>
    <div class="login-form-sub-title">
      {{ $t('login.form.subTitle') }}
    </div>
    <div class="login-form-error-msg" />
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
      <el-space class="login-form-actions" :size="16" direction="vertical" fill>
        <div class="login-form-password-actions">
          <el-checkbox>{{ $t('login.form.rememberPassword') }}</el-checkbox>
          <el-button link>
            {{ $t('login.form.forgetPassword') }}
          </el-button>
        </div>
        <el-button type="primary" @click="submitLogin(formRef)">
          {{ $t('login.form.login') }}
        </el-button>
        <el-button link long class="login-form-register-btn">
          {{ $t('login.form.register') }}
        </el-button>
      </el-space>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    color: #1d2129;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: #86909c;
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: red;
    line-height: 32px;
  }

  &-actions {
    width: 100%;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>
