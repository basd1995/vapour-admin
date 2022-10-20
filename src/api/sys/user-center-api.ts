import httpClient from '~/utils/request'

const prefix = '/sys/userCenter'

export default {
  // 获取登录用户的菜单
  userLoginMenu() {
    return httpClient.get(`${prefix}/loginMenu`)
  },
}
