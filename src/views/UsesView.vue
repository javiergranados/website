<script setup lang="ts">
import usesData from '@/data/uses.json'

const { intro, sections } = usesData
</script>

<template>
  <div class="mx-auto w-full max-w-5xl px-4 py-12 md:px-8">
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-primary md:text-4xl">Uses</h1>
      <p class="mt-3 text-primary/70">{{ intro }}</p>
    </div>

    <div class="flex flex-col gap-12">
      <section v-for="section in sections" :key="section.title">
        <h2 class="mb-5 flex items-center gap-2 text-xl font-semibold text-primary">
          <span>{{ section.icon }}</span>
          <span>{{ section.title }}</span>
        </h2>
        <div class="flex flex-col gap-2">
          <a
            v-for="item in section.items"
            :key="item.title"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="group flex flex-col gap-1 rounded-lg border border-primary/10 px-4 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
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
