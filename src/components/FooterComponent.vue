<script setup lang="ts">
import { ref } from 'vue'

const date = new Date()
const year = ref(date.getFullYear())
</script>

<template>
  <footer class="-content border- footer h-16 items-center border-t border-primary bg-base-100 p-4">
    <p class="text-primary">© {{ year }} Javier Granados - Frontend Engineer</p>
  </footer>
</template>
