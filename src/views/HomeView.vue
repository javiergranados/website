<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { theme } = useTheme()
const { t } = useI18n()

const coverSrc = computed(() => `cover-${theme.value}.svg`)
const coverMdSrc = computed(() => `cover-md-${theme.value}.svg`)
const coverLgSrc = computed(() => `cover-lg-${theme.value}.svg`)
</script>

<template>
  <section class="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 lg:py-20">
    <div class="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
      <!-- Cover SVG -->
      <div class="shrink-0">
        <img :src="coverSrc" alt="Javier Granados" class="h-[200px] w-[276px] md:hidden" />
        <img :src="coverMdSrc" alt="Javier Granados" class="hidden h-[280px] w-[520px] md:block xl:hidden" />
        <img :src="coverLgSrc" alt="Javier Granados" class="hidden h-[300px] w-[745px] xl:block" />
      </div>

      <!-- Text content -->
      <div class="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <div>
          <p class="mb-2 text-sm font-medium uppercase tracking-widest text-primary/60">{{ t('home.location') }}</p>
          <h1 class="text-3xl font-bold text-primary md:text-4xl">{{ t('home.headline') }}</h1>
        </div>

        <p class="max-w-md text-base text-primary/70">
          {{ t('home.tagline') }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <router-link
            to="/projects"
            class="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-base-100 transition-all hover:opacity-90 hover:shadow-lg"
            >{{ t('home.cta.projects') }}</router-link
          >
          <a
            href="mailto:hola@javiergranados.dev"
            class="rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
            >{{ t('home.cta.contact') }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
