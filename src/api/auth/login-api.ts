import httpClient from '~/utils/request'

const prefix = '/auth/b'

interface ILogin {
  username: string
  password: string
  validCode: string
  validCodeReqNo: string
}

interface ILogout {
  token: string
}

export default {
  // B端获取图片验证码
  // getPicCaptcha(data) {
  //   return httpClient.get(`${prefix}/getPicCaptcha`, data)
  // },
  // B端获取手机验证码
  // getPhoneValidCode(data) {
  //   return httpClient.get(`${prefix}/getPhoneValidCode`, data)
  // },
  // B端账号密码登录
  login(data: ILogin) {
    return httpClient.post(`${prefix}/doLogin`, data)
  },
  // B端手机验证码登录
  // loginByPhone(data) {
  //   return httpClient.post(`${prefix}/doLoginByPhone`, data)
  // },
  // 退出
  logout(data: ILogout) {
    return httpClient.get(`${prefix}/doLogout`, { data })
  },
  // 获取用户信息
  getLoginUser() {
    return httpClient.get(`${prefix}/getLoginUser`)
  },
}

