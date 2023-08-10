<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

const NAV_OPTIONS = ['projects', 'uses', 'about']

function buildOptionClass(index: number) {
  return {
    'ml-0': index === 0,
    'nav-option': true,
    'nav-option-even': index % 2 === 0,
    'nav-option-odd': index % 2 !== 0,
  }
}
</script>

<template>
  <nav class="navbar h-24 border-b border-primary bg-base-100">
    <a class="btn btn-ghost mr-2 text-xl normal-case">LOGO</a>
    <a v-for="(option, index) in NAV_OPTIONS" :key="index" :class="buildOptionClass(index)">/{{ option }}</a>
    <ThemeToggle class="ml-auto mr-2" />
  </nav>
</template>
