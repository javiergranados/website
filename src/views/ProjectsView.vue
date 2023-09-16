<script setup lang="ts">
type Projects = ReadonlyArray<{
  label: string
  href: string
}>

const links: Projects = [
  {
    label: 'Wallacoin',
    href: 'https://wallacoin.com/',
  },
  {
    label: 'Brickbro',
    href: 'https://www.brickbro.com/',
  },
  {
    label: 'Entrena X Salud',
    href: 'https://www.entrenaxsalud.es/',
  },
  {
    label: 'BitsaCard',
    href: 'https://bitsacard.com/',
  },
  {
    label: 'App BitsaCard',
    href: 'https://app.bitsacard.com/',
  },
]
</script>

<template>
  <h1 class="mb-4 text-4xl font-semibold text-primary md:mb-6">
    A brief list of public projects in which I&lsquo;ve created or participated
  </h1>
  <ul class="text-3xl text-primary">
    <li v-for="link in links" :key="link.label" class="mb-2">
      <a
        :href="link.href"
        target="_blank"
        rel="noreferrer"
        class="text-2xl text-primary transition-colors hover:text-neutral"
      >
        <span class="mr-3 hidden md:inline">▷</span>
        <span class="no-underline">{{ link.label }}</span>
      </a>
    </li>

    <li class="mb-2"></li>
  </ul>
</template>
