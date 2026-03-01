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
      'group flex flex-col gap-3 rounded-xl border p-5 transition-all duration-200',
      isDiscontinued
        ? 'cursor-not-allowed border-primary/20 hover:border-primary/20'
        : 'cursor-pointer border-primary/20 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10',
    ]"
  >
    <div class="flex items-start justify-between gap-3">
      <h2 :class="['text-base font-semibold text-primary', isDiscontinued && 'line-through decoration-primary/40']">
        {{ label }}
      </h2>
      <div class="flex shrink-0 items-center gap-2">
        <span class="text-xs text-primary/50">{{ year }}</span>
        <span v-if="featured && !isDiscontinued" class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Featured</span>
        <span v-if="isDiscontinued" class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary/60">Discontinued</span>
      </div>
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
