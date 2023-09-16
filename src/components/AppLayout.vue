<script setup lang="ts">
import FooterComponent from './FooterComponent.vue'
import NavbarComponent from './NavbarComponent.vue'
</script>

<template>
  <NavbarComponent />
  <main role="main" class="h-[calc(100vh-10rem)] overflow-auto bg-base-100 p-8">
    <router-view></router-view>
  </main>
  <FooterComponent />
</template>
