<script setup lang="ts">
import { ref } from 'vue'

const date = new Date()
const year = ref(date.getFullYear())
</script>

<template>
  <footer class="footer h-16 items-center border-t border-primary bg-base-100 p-4">
    <p class="mx-auto text-primary md:mx-0">© {{ year }} Javier Granados - Frontend Developer</p>
  </footer>
</template>
