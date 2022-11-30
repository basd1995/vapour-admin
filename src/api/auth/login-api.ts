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
  // 账号密码登录
  login(data: ILogin) {
    return httpClient.post(`${prefix}/doLogin`, data)
  },
  // 退出
  logout(data: ILogout) {
    return httpClient.get(`${prefix}/doLogout`, { data })
  },
  // 获取用户信息
  getLoginUser() {
    return httpClient.get(`${prefix}/getLoginUser`)
  },
}

