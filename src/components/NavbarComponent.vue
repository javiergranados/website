<script setup lang="ts">
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
    <ul class="items-center px-1 text-primary">
      <li class="btn btn-ghost mr-2 text-xl normal-case">LOGO</li>
      <li v-for="(option, index) in NAV_OPTIONS" :key="index" :class="buildOptionClass(index)">/{{ option }}</li>
    </ul>
  </nav>
</template>
