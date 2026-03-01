<script setup lang="ts">
import FooterComponent from './FooterComponent.vue'
import NavbarComponent from './NavbarComponent.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-base-100">
    <NavbarComponent />
    <main role="main" class="flex-1">
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>
    <FooterComponent />
  </div>
</template>
