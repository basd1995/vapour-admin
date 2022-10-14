import { defineStore } from 'pinia'
import sidebarTheme from '~/style/sidebar.module.scss'

const useThemeStore = defineStore('theme', {
  state: () => ({
    sideBarTheme: sidebarTheme,
  }),

  getters: {
    getSideBarTheme: state => state.sideBarTheme,
  },
})

export default useThemeStore
