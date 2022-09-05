import { defineStore } from 'pinia'
import { getItem } from '~/utils/storage'

const useAppStore = defineStore('app', {
  state: () => ({
    language: getItem('language') || 'zh-CN',
  }),

  getters: {
    getLanguage: state => state.language,
  },

  actions: {

  },
})

export default useAppStore
