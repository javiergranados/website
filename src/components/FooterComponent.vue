<script setup lang="ts">
import { ref } from 'vue'

const date = new Date()
const year = ref(date.getFullYear())
</script>

<template>
  <footer class="border-t border-primary/20 bg-base-100">
    <div class="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-6 md:flex-row md:justify-between md:px-8">
      <p class="text-sm text-primary/70">© {{ year }} Javier Granados</p>
      <div class="flex items-center gap-4">
        <a href="mailto:hola@javiergranados.dev" class="text-sm text-primary/70 transition-colors hover:text-primary"
          >Email</a
        >
        <a
          href="https://www.linkedin.com/in/javiergranadosdev/"
          target="_blank"
          rel="noreferrer"
          class="text-sm text-primary/70 transition-colors hover:text-primary"
          >LinkedIn</a
        >
        <a
          href="https://github.com/javiergranados"
          target="_blank"
          rel="noreferrer"
          class="text-sm text-primary/70 transition-colors hover:text-primary"
          >GitHub</a
        >
      </div>
    </div>
  </footer>
</template>
