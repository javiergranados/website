<script setup lang="ts">
import { useLocalizedData } from '@/composables/useLocalizedData'
import aboutData from '@/data/about.json'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { localizeField } = useLocalizedData()

const { interests } = aboutData
</script>

<template>
  <div class="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-primary md:text-4xl">{{ t('about.title') }}</h1>
    </div>

    <div class="flex flex-col gap-8 md:flex-row md:gap-16">
      <div class="flex flex-col gap-6 md:max-w-lg">
        <div>
          <p class="text-lg font-semibold text-primary">{{ localizeField(aboutData.headline) }}</p>
          <p class="mt-1 flex items-center gap-1.5 text-sm text-primary/60">
            <span>📍</span>
            <span>{{ localizeField(aboutData.location) }}</span>
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <p class="text-base leading-relaxed text-primary/80">{{ localizeField(aboutData.bio) }}</p>
          <p class="text-base leading-relaxed text-primary/80">{{ localizeField(aboutData.bio2) }}</p>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="interest in interests"
            :key="interest.slug"
            class="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-primary/80"
          >
            <span>{{ interest.emoji }}</span>
            <span>{{ localizeField(interest.label) }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
