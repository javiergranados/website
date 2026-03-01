import { SUPPORTED_LOCALES, type SupportedLocale } from '@/i18n'
import { useI18n } from 'vue-i18n'

export function useLocale() {
  const { locale } = useI18n({ useScope: 'global' })

  function setLocale(newLocale: SupportedLocale) {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
    document.documentElement.setAttribute('lang', newLocale)
  }

  function toggleLocale() {
    const next = locale.value === 'en' ? 'es' : 'en'
    setLocale(next)
  }

  return {
    locale,
    supportedLocales: SUPPORTED_LOCALES,
    setLocale,
    toggleLocale,
  }
}
