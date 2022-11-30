import { defineStore } from 'pinia'
import { getItem, setItem } from '~/utils/storage'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getItem('token'),
    username: '',
    avatar: '',
  }),
  getters: {
    getToken: state => state.token,
    getUsername: state => state.username,
    getAvatar: state => state.avatar,
  },
  actions: {
    setToken(token: string) {
      setItem('token', token)
    },
    setUserInfo(username: string) {
      this.username = username
    },
    setAvatar(avatar: string) {
      this.avatar = avatar
    },
  },
})
