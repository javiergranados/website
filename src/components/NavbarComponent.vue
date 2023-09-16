<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const NAV_OPTIONS = ['projects', 'uses', 'about']

const { theme, toggleTheme } = useTheme()
const route = useRoute()

const logoSrc = computed(() => `logo-${theme.value}.svg`)

function buildOptionClass(index: number, option: string) {
  return {
    'ml-0': index === 0,
    'nav-option': true,
    'nav-option-selected': route.name === option,
    'nav-option-even': index % 2 === 0,
    'nav-option-odd': index % 2 !== 0,
  }
}
</script>

<template>
  <nav class="navbar h-24 border-b border-primary bg-base-100">
    <router-link to="/" class="mr-8"><img alt="logo" :src="logoSrc" width="65" height="50" /> </router-link>
    <router-link
      v-for="(option, index) in NAV_OPTIONS"
      :key="index"
      :to="`/${option}`"
      :class="buildOptionClass(index, option)"
      >/{{ option }}</router-link
    >
    <ThemeToggle class="ml-auto mr-2" :is-dark-mode="theme === 'dark'" @toggle-theme="toggleTheme" />
  </nav>
</template>
