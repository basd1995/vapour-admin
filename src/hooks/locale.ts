import { useI18n } from 'vue-i18n'
import { setItem } from '~/utils/storage'

export default function useLanguage() {
  const i18 = useI18n()
  const currentLanguage = computed(() => {
    return i18.locale.value
  })
  const setLanguage = (value: string) => {
    i18.locale.value = value
    setItem('vapour-locale', value)
  }
  return {
    currentLanguage,
    setLanguage,
  }
}
