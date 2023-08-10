import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

type Theme = 'dark' | 'light'

export function useTheme() {
  const mediaQueryList = ref(window.matchMedia('(prefers-color-scheme: dark)'))
  const theme = ref<Theme>(mediaQueryList.value.matches ? 'dark' : 'light')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
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
