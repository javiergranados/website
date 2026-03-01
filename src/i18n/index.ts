import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

type MessageSchema = typeof en

const SUPPORTED_LOCALES = ['en', 'es'] as const
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

function getDefaultLocale(): SupportedLocale {
  // 1. Comprobar si hay un idioma guardado en localStorage
  const saved = localStorage.getItem('locale')
  if (saved && SUPPORTED_LOCALES.includes(saved as SupportedLocale)) {
    return saved as SupportedLocale
  }

  // 2. Detectar el idioma del navegador
  const browserLang = navigator.language.split('-')[0]
  if (SUPPORTED_LOCALES.includes(browserLang as SupportedLocale)) {
    return browserLang as SupportedLocale
  }

  // 3. Fallback a inglés
  return 'en'
}

const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
})

export default i18n
export { SUPPORTED_LOCALES, type SupportedLocale }
