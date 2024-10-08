<script setup lang="ts">
type Projects = ReadonlyArray<{
  label: string
  href: string
  isDiscontinued?: boolean
}>

const projects: Projects = [
  {
    label: 'Brickbro',
    href: 'https://www.brickbro.com',
  },
  {
    label: 'Entrena X Salud',
    href: 'https://entrenaxsalud.vercel.app/',
  },
  {
    label: 'BitsaCard',
    href: 'https://bitsacard.com',
  },
  {
    label: 'App BitsaCard',
    href: 'https://app.bitsacard.com',
  },
  {
    label: 'Wallacoin',
    href: 'https://wallacoin.com',
    isDiscontinued: true,
  },
]
</script>

<template>
  <h1 class="mb-4 text-4xl font-semibold text-primary md:mb-6">
    A brief list of public projects in which I&lsquo;ve created or participated
  </h1>
  <ul class="text-3xl text-primary">
    <li v-for="project in projects" :key="project.label" class="mb-2">
      <a :href="project.href" target="_blank" rel="noreferrer" :class="`text-2xl text-primary transition-colors hover:text-neutral ${project.isDiscontinued ? 'pointer-events-none line-through' : ''
        }`">
        <span class="mr-3 hidden md:inline">▷</span>
        <span class="no-underline">{{ project.label }}{{ project.isDiscontinued ? ' (discontinued)' : '' }}</span>
      </a>
    </li>

    <li class="mb-2"></li>
  </ul>
</template>
