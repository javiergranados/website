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
  <main role="main" class="animate__animated animate__fadeIn h-[calc(100vh-10rem)] overflow-auto bg-base-100 p-8">
    <div className="w-full max-w-5xl px-4 pt-5 pb-10 mx-auto my-0 md:px-8">
      <div className="block md:hidden">
        <img :src="coverSrc" alt="cover" class="h-[200px] w-[275px]" />
      </div>
      <div className="hidden md:block lg:hidden">
        <img :src="coverMdSrc" alt="cover" class="h-[380px] w-[705px]" />
      </div>
      <div className="hidden lg:block lg:max-w-4xl">
        <img :src="coverLgSrc" alt="cover" class="h-[360px] w-[895px]" />
      </div>
      <SocialBanner />
      <div className="text-center md:text-left">
        <router-view></router-view>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
