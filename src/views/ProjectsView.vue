<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import projectsData from '@/data/projects.json'

const projects = projectsData
</script>

<template>
  <div class="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-primary md:text-4xl">Projects</h1>
      <p class="mt-3 text-primary/70">A selection of public projects I've been part of.</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.slug" v-bind="project" />
    </div>
  </div>
</template>
