import { createI18n } from 'vue-i18n'
import en from './en-US'
import cn from './zh-CN'

const defaultLocale = 'zh-CN'

const i18n = createI18n({
  locale: defaultLocale,
  legacy: false,
  messages: {
    'en-US': en,
    'zh-CN': cn,
  },
})

export default i18n
