<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { visualTheme, toggleVisualTheme } = useTheme()
</script>

<template>
  <button
    class="btn btn-ghost btn-sm flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 p-0 transition-all hover:border-primary/40 hover:bg-primary/10"
    :aria-label="`Switch to ${visualTheme === 'default' ? 'Neon' : 'Default'} theme`"
    :title="`Switch to ${visualTheme === 'default' ? 'Neon' : 'Default'} theme`"
    @click="toggleVisualTheme"
  >
    <!-- Icono paleta para tema default -->
    <svg
      v-if="visualTheme === 'default'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4 text-primary"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
      />
    </svg>
    <!-- Icono rayo/bolt para tema neon -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="h-4 w-4 text-primary"
    >
      <path
        fill-rule="evenodd"
        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>
