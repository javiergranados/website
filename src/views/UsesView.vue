<script setup lang="ts">
import { useLocalizedData } from '@/composables/useLocalizedData'
import usesData from '@/data/uses.json'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { localizeField } = useLocalizedData()
</script>

<template>
  <div class="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-primary md:text-4xl">{{ t('uses.title') }}</h1>
      <p class="mt-3 text-primary/70">{{ localizeField(usesData.intro) }}</p>
    </div>

    <div class="flex flex-col gap-12">
      <section v-for="section in usesData.sections" :key="section.title.en">
        <h2 class="mb-5 flex items-center gap-2 text-xl font-semibold text-primary">
          <span>{{ section.icon }}</span>
          <span>{{ localizeField(section.title) }}</span>
        </h2>
        <div class="flex flex-col gap-2">
          <a
            v-for="item in section.items"
            :key="item.title"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="group flex flex-col gap-1 rounded-lg border border-primary/30 px-4 py-3 transition-all duration-200 hover:border-primary/60 hover:bg-primary/5"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-primary">{{ item.title }}</span>
                <span class="text-primary/30">·</span>
                <span class="text-sm text-primary/70">{{ item.text }}</span>
              </div>
              <span
                class="text-xs text-primary/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary/60"
                >→</span
              >
            </div>
            <p v-if="item.note" class="text-xs text-primary/50">{{ item.note }}</p>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
