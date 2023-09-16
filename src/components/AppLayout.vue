<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { computed } from 'vue'
import FooterComponent from './FooterComponent.vue'
import NavbarComponent from './NavbarComponent.vue'
import SocialBanner from './SocialBanner.vue'

const { theme } = useTheme()

const coverSrc = computed(() => `cover-${theme.value}.svg`)
const coverMdSrc = computed(() => `cover-md-${theme.value}.svg`)
const coverLgSrc = computed(() => `cover-lg-${theme.value}.svg`)
</script>

<template>
  <NavbarComponent />
  <main
    role="main"
    class="animate__animated animate__fadeIn h-[calc(100vh-8.5rem)] overflow-auto bg-base-100 pt-5 md:h-[calc(100vh-10rem)] md:p-8"
  >
    <div class="mx-auto my-0 w-full max-w-5xl px-4 pb-10 pt-5 md:px-8">
      <div class="block md:hidden">
        <img :src="coverSrc" alt="cover" class="mx-auto h-[200px] w-[275px]" />
      </div>
      <div class="hidden md:block lg:hidden">
        <img :src="coverMdSrc" alt="cover" class="mx-auto h-[380px] w-[705px]" />
      </div>
      <div class="hidden lg:block lg:max-w-4xl">
        <img :src="coverLgSrc" alt="cover" class="mx-auto h-[360px] w-[895px]" />
      </div>
      <SocialBanner />
      <div class="text-center md:text-left">
        <router-view></router-view>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
