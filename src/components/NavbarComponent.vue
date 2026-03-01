<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HamburgerMenu from './HamburgerMenu.vue'
import ThemeToggle from './ThemeToggle.vue'

const NAV_OPTIONS = ['projects', 'uses', 'about']

const { theme, toggleTheme } = useTheme()
const route = useRoute()

const logoSrc = computed(() => `logo-${theme.value}.svg`)

function isActive(option: string) {
  return route.name === option
}
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-primary/20 bg-base-100/95 backdrop-blur-sm">
    <div class="mx-auto flex h-16 max-w-5xl items-center px-4 md:px-8">
      <HamburgerMenu class="mr-4" />
      <router-link to="/" class="mr-4 flex items-center transition-opacity hover:opacity-80">
        <img alt="logo" :src="logoSrc" width="36" height="29" />
      </router-link>
      <div class="hidden items-center gap-1 md:flex">
        <router-link
          to="/"
          :class="[
            'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
            isActive('home')
              ? 'bg-primary text-base-100 dark:bg-primary dark:text-base-100'
              : 'text-primary hover:bg-primary/10 dark:hover:bg-primary/20',
          ]"
          >/home</router-link
        >
        <router-link
          v-for="option in NAV_OPTIONS"
          :key="option"
          :to="`/${option}`"
          :class="[
            'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
            isActive(option)
              ? 'bg-primary text-base-100 dark:bg-primary dark:text-base-100'
              : 'text-primary hover:bg-primary/10 dark:hover:bg-primary/20',
          ]"
          >/{{ option }}</router-link
        >
      </div>
      <div class="ml-auto">
        <ThemeToggle :is-dark-mode="theme === 'dark'" @toggle-theme="toggleTheme" />
      </div>
    </div>
  </nav>
</template>
