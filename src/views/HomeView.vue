<script setup lang="ts">
import { ref } from 'vue'

const gifSrc = ref()
gifSrc.value = 'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif'
</script>

<template>
  <h1 class="flex items-end text-4xl font-semibold text-primary">
    <span class="mr-6">Hey folks!</span>
    <img :src="gifSrc" alt="waving hand" class="inline h-16" />
  </h1>
  <p class="mt-4 text-3xl text-primary">
    I&apos;m a software engineer based in Seville, Spain&nbsp;
    <span role="img" aria-label="flag"> 🇪🇸 </span>
  </p>
</template>
