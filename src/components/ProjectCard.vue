<script setup lang="ts">
defineProps<{
  label: string
  description: string
  href: string
  role: string
  stack: string[]
  year: string
  featured?: boolean
  isDiscontinued?: boolean
}>()
</script>

<template>
  <a
    :href="isDiscontinued ? undefined : href"
    :target="isDiscontinued ? undefined : '_blank'"
    rel="noreferrer"
    :class="[
      'group relative flex flex-col gap-3 rounded-xl border p-5 transition-all duration-200',
      isDiscontinued
        ? 'cursor-default border-primary/10 opacity-50'
        : 'cursor-pointer border-primary/20 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10',
    ]"
  >
    <!-- Featured badge -->
    <div v-if="featured && !isDiscontinued" class="absolute right-4 top-4">
      <span class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Featured</span>
    </div>
    <!-- Discontinued badge -->
    <div v-if="isDiscontinued" class="absolute right-4 top-4">
      <span class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary/60">Discontinued</span>
    </div>

    <div class="flex items-start justify-between gap-2 pr-20">
      <h2 class="text-base font-semibold text-primary">{{ label }}</h2>
      <span class="shrink-0 text-xs text-primary/50">{{ year }}</span>
    </div>

    <p class="text-sm leading-relaxed text-primary/70">{{ description }}</p>

    <div class="flex items-center justify-between">
      <div class="flex flex-wrap gap-1.5">
        <span v-for="tech in stack" :key="tech" class="bg-primary/8 rounded-md px-2 py-0.5 text-xs text-primary/70">{{
          tech
        }}</span>
      </div>
      <span
        v-if="!isDiscontinued"
        class="text-sm text-primary/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
        >→</span
      >
    </div>

    <p class="text-xs text-primary/50">{{ role }}</p>
  </a>
</template>
