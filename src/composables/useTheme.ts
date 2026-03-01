import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'

type ColorMode = 'dark' | 'light'
type VisualTheme = 'default' | 'neon'

const THEME_STORAGE_KEY = 'visual-theme'
const COLOR_MODE_STORAGE_KEY = 'color-mode'

const mediaQueryList = ref(window.matchMedia('(prefers-color-scheme: dark)'))
const defaultColorMode: ColorMode = mediaQueryList.value.matches ? 'dark' : 'light'

const colorMode = ref<ColorMode>(
  (localStorage.getItem(COLOR_MODE_STORAGE_KEY) as ColorMode) || defaultColorMode
)
const visualTheme = ref<VisualTheme>(
  (localStorage.getItem(THEME_STORAGE_KEY) as VisualTheme) || 'default'
)

// Mapa de tema DaisyUI según combinación
const daisyuiThemeMap: Record<VisualTheme, Record<ColorMode, string>> = {
  default: { light: 'light', dark: 'dark' },
  neon: { light: 'neon-light', dark: 'neon-dark' },
}

export function useTheme() {
  const daisyuiTheme = computed(() => daisyuiThemeMap[visualTheme.value][colorMode.value])

  function applyTheme() {
    const html = document.documentElement

    // Color mode class (light/dark)
    html.classList.remove('light', 'dark')
    html.classList.add(colorMode.value)

    // Visual theme class
    html.classList.remove('theme-neon')
    if (visualTheme.value === 'neon') {
      html.classList.add('theme-neon')
    }

    // DaisyUI data-theme
    html.setAttribute('data-theme', daisyuiTheme.value)

    // Persist
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, colorMode.value)
    localStorage.setItem(THEME_STORAGE_KEY, visualTheme.value)
  }

  function toggleColorMode() {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  }

  function setVisualTheme(theme: VisualTheme) {
    visualTheme.value = theme
  }

  function toggleVisualTheme() {
    visualTheme.value = visualTheme.value === 'default' ? 'neon' : 'default'
  }

  function handleMatchMediaChange(e: MediaQueryListEvent) {
    if (!localStorage.getItem(COLOR_MODE_STORAGE_KEY)) {
      colorMode.value = e.matches ? 'dark' : 'light'
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
    applyTheme()
  })

  return {
    colorMode,
    visualTheme,
    daisyuiTheme,
    toggleColorMode,
    setVisualTheme,
    toggleVisualTheme,
  }
}
