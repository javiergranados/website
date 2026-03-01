<script setup lang="ts">
import { useLocalizedData, type LocalizedString } from '@/composables/useLocalizedData'
import { useI18n } from 'vue-i18n'

defineProps<{
  label: string
  description: LocalizedString | string
  href: string
  role: LocalizedString | string
  stack: string[]
  year: string
  scope: string
  isDiscontinued?: boolean
}>()

const { t } = useI18n()
const { localizeField } = useLocalizedData()
</script>

<template>
  <a
    :href="isDiscontinued ? undefined : href"
    :target="isDiscontinued ? undefined : '_blank'"
    rel="noreferrer"
    :class="[
      'group flex flex-col gap-3 rounded-xl border p-5 transition-all duration-200',
      isDiscontinued
        ? 'border-primary/15 cursor-not-allowed bg-primary/[0.05]'
        : 'cursor-pointer border-primary/20 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10',
    ]"
  >
    <div class="flex items-start justify-between gap-3">
      <h2 class="text-base font-semibold text-primary">
        {{ label }}
      </h2>
      <div class="flex shrink-0 items-center gap-2">
        <span class="text-xs text-primary/50">{{ year }}</span>
        <span class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{{ scope }}</span>
        <span v-if="isDiscontinued" class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary/60"
          >{{ t('projects.discontinued') }}</span
        >
      </div>
    </div>

    <p class="text-sm leading-relaxed text-primary/70">{{ localizeField(description) }}</p>

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

    <p class="text-xs text-primary/50">{{ localizeField(role) }}</p>
  </a>
</template>
