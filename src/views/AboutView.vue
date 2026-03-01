<script setup lang="ts">
import aboutData from '@/data/about.json'

const { headline, location, bio, bio2, interests, social } = aboutData
</script>

<template>
  <div class="mx-auto w-full max-w-5xl px-4 py-12 md:px-8">
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-primary md:text-4xl">About</h1>
    </div>

    <div class="flex flex-col gap-8 md:flex-row md:gap-16">
      <div class="flex flex-col gap-6 md:max-w-lg">
        <div>
          <p class="text-lg font-semibold text-primary">{{ headline }}</p>
          <p class="mt-1 flex items-center gap-1.5 text-sm text-primary/60">
            <span>📍</span>
            <span>{{ location }}</span>
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <p class="text-base leading-relaxed text-primary/80">{{ bio }}</p>
          <p class="text-base leading-relaxed text-primary/80">{{ bio2 }}</p>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="interest in interests"
            :key="interest.label"
            class="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-primary/80"
          >
            <span>{{ interest.emoji }}</span>
            <span>{{ interest.label }}</span>
          </span>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-primary/50">Get in touch</h2>
        <div class="flex flex-col gap-2">
          <a
            v-for="link in social"
            :key="link.label"
            :href="link.href"
            :target="link.href.startsWith('mailto') ? undefined : '_blank'"
            rel="noreferrer"
            class="group flex items-center gap-2 rounded-lg border border-primary/20 px-4 py-3 text-sm font-medium text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
          >
            <span>{{ link.label }}</span>
            <span class="ml-auto text-primary/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
              >→</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
