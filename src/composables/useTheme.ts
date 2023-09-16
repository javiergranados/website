import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

type Theme = 'dark' | 'light'

const mediaQueryList = ref(window.matchMedia('(prefers-color-scheme: dark)'))
const defaultThemeValue = mediaQueryList.value.matches ? 'dark' : 'light'
const theme = ref<Theme>(defaultThemeValue)

export function useTheme() {
  document.documentElement.classList.remove(defaultThemeValue === 'dark' ? 'light' : 'dark')
  document.documentElement.classList.add(defaultThemeValue)

  function toggleTheme() {
    const newThemeValue = theme.value === 'light' ? 'dark' : 'light'

    document.documentElement.classList.remove(theme.value)
    document.documentElement.classList.add(newThemeValue)
    theme.value = newThemeValue
  }

  function handleMatchMediaChange(colorSchemeDark: MediaQueryListEvent) {
    if ((theme.value === 'light' && colorSchemeDark.matches) || (theme.value === 'dark' && !colorSchemeDark.matches)) {
      toggleTheme()
    }
  }

  onMounted(() => {
    mediaQueryList.value = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQueryList.value.addEventListener('change', handleMatchMediaChange)
  })

  onUnmounted(() => {
    mediaQueryList.value.removeEventListener('change', handleMatchMediaChange)
  })

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  return { theme, toggleTheme }
}
