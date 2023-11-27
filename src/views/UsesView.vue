<script setup lang="ts">
type IterableElement = ReadonlyArray<{
  title: string
  text: string
  href: string
}>

const apps: IterableElement = [
  {
    title: 'Editor',
    text: 'Visual Studio Code',
    href: 'https://code.visualstudio.com',
  },
  {
    title: 'Terminal',
    text: 'Warp',
    href: 'https://app.warp.dev/referral/96XYLV',
  },
  {
    title: 'To-Do List',
    text: 'Things',
    href: 'https://culturedcode.com/things/',
  },
  {
    title: 'Settings',
    text: 'Dot Files repo',
    href: 'https://github.com/javiergranados/dotfiles',
  },
]

const devices: IterableElement = [
  {
    title: 'Laptop',
    text: 'MacBook Pro 16"',
    href: 'https://amzn.eu/d/7ijc1tJ',
  },
  {
    title: 'Main Monitor',
    text: 'Huawei Mateview',
    href: 'https://amzn.eu/d/6YRjSjR',
  },
  {
    title: 'Secondary Monitor',
    text: 'Dell P2421DC',
    href: 'https://amzn.eu/d/8l51wYx',
  },
  {
    title: 'Keyboard',
    text: 'Feker Alice 80',
    href: 'https://amzn.eu/d/j6YUaUg',
  },
  {
    title: 'Mouse',
    text: 'Logitech MX Ergo',
    href: 'https://amzn.eu/d/gvBSjKY',
  },
  {
    title: 'Standing Desk',
    text: 'FlexiSpot E7',
    href: 'https://www.flexispot.es/escritorio-regulable-electricamente-e7.html',
  },
  {
    title: 'Tabletop',
    text: 'Ikea Bekant',
    href: 'https://www.ikea.com/es/es/p/bekant-tablero-linoleo-azul-10366305/#content',
  },
  {
    title: 'Chair',
    text: 'Ikea Markus',
    href: 'https://www.ikea.com/es/es/p/markus-silla-trabajo-vissle-gris-claro-10521858',
  },
]
</script>

<template>
  <h1 class="mb-4 text-4xl font-semibold text-primary md:mb-6">Desktop Apps</h1>
  <ul class="text-3xl text-primary">
    <li v-for="app in apps" :key="app.title" class="mb-2">
      <a
        :href="app.href"
        target="_blank"
        rel="noreferrer"
        class="text-2xl text-primary no-underline transition-colors hover:text-neutral"
      >
        <span class="mr-3 hidden md:inline">▷</span>
        <span class="font-semibold">{{ app.title }} - </span>
        <span>{{ app.text }}</span>
      </a>
    </li>

    <li class="mb-2"></li>
  </ul>
  <h1 class="mb-4 mt-10 text-4xl font-semibold text-primary md:mb-6">Desk Setup</h1>
  <ul class="text-3xl text-primary">
    <li v-for="device in devices" :key="device.title" class="mb-2">
      <a
        :href="device.href"
        target="_blank"
        rel="noreferrer"
        class="text-2xl text-primary no-underline transition-colors hover:text-neutral"
      >
        <span class="mr-3 hidden md:inline">▷</span>
        <span class="font-semibold">{{ device.title }} - </span>
        <span>{{ device.text }}</span>
      </a>
    </li>

    <li class="mb-2"></li>
  </ul>
</template>
