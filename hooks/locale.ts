import { useI18n } from 'vue-i18n'

export default function useLocale() {
  const i18 = useI18n()
  const currentLocale = computed(() => {
    return i18.locale.value
  })
  const changeLocale = (value: string) => {
    i18.locale.value = value
    localStorage.setItem('vapour-locale', value)
  }
  return {
    currentLocale,
    changeLocale,
  }
}
