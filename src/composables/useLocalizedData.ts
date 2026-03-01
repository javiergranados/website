import { useI18n } from 'vue-i18n'

export type LocalizedString = { en: string; [key: string]: string }

/**
 * Composable para resolver campos con traducciones embebidas (Opción A del plan i18n).
 * Expone `localizeField`, una función reactiva que extrae el valor
 * en el locale activo de un campo que puede ser string simple o { en, es, ... }.
 */
export function useLocalizedData() {
  const { locale } = useI18n()

  function localizeField(field: LocalizedString | string): string {
    if (typeof field === 'object' && field !== null) {
      return field[locale.value] ?? field['en']
    }
    return field
  }

  return { localizeField }
}
