<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { locale, toggleLocale } = useLocale()
</script>

<template>
  <button
    @click="toggleLocale"
    class="btn btn-ghost btn-sm flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 p-0 transition-all hover:border-primary/40 hover:bg-primary/10"
    :aria-label="`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`"
  >
    <span class="text-xs font-semibold uppercase tracking-wide text-primary">{{ locale }}</span>
  </button>
</template>
