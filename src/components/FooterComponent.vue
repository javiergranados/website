<script setup lang="ts">
import { ref } from 'vue'

const date = new Date()
const year = ref(date.getFullYear())
</script>

<template>
  <footer class="footer h-14 items-center border-t border-primary bg-base-100 p-2 md:h-16 md:p-4">
    <p class="mx-auto text-primary md:mx-0">© {{ year }} Javier Granados - Software Engineer</p>
  </footer>
</template>
