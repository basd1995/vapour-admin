import { defineStore } from 'pinia'
import { getItem } from '~/utils/storage'

const useAppStore = defineStore('app', {
  state: () => ({
    language: getItem('language') || 'zh-CN',
    menuIsCollapse: false,
  }),

  getters: {
    getLanguage: state => state.language,
    getMenuIsCollapse: state => state.menuIsCollapse,
  },

  actions: {
    setMenuIsCollapse() {
      this.menuIsCollapse = !this.menuIsCollapse
    },
  },
})

export default useAppStore
