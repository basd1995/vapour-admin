import httpClient from '~/utils/request'

export default {
  // 获取菜单树
  menuTree() {
    return httpClient.get('/sys/userCenter/loginMenu')
  },
}
