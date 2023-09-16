<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useRouter } from 'vue-router'

const MENU_OPTIONS = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
  {
    label: 'Uses',
    route: '/uses',
  },
  {
    label: 'About',
    route: '/about',
  },
]
const router = useRouter()
</script>

<template>
  <Menu v-slot="{ open }" as="div" class="relative inline-block text-left">
    <MenuButton class="relative ml-2 md:hidden">
      <div
        class="relative flex h-[50px] w-[50px] transform flex-col items-center justify-center overflow-hidden rounded-full border border-primary"
      >
        <div
          :class="[open ? 'translate-y-3' : '', '-translate-y-5 transform overflow-hidden transition-all duration-300']"
        >
          <svg
            class="w-6h-6 h-6 w-6 animate-bounce text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div
          class="flex h-[20px] w-[20px] origin-center -translate-y-3 transform flex-col justify-between overflow-hidden transition-all duration-300"
        >
          <div
            :class="[
              open ? 'translate-y-6' : '',
              'mb-1.5 h-[2px] w-7 origin-left transform bg-primary transition-all duration-300',
            ]"
          ></div>
          <div1
            :class="[
              open ? 'translate-y-6' : '',
              'mb-1.5 h-[2px] w-7 transform rounded bg-primary transition-all delay-75 duration-300',
            ]"
          ></div1>
          <div
            :class="[
              open ? 'translate-y-6' : '',
              'h-[2px] w-7 origin-left transform bg-primary transition-all delay-100 duration-300',
            ]"
          ></div>
        </div>
      </div>
    </MenuButton>
    <MenuItems
      class="ring-primary-700 absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"
    >
      <div class="px-1 py-1">
        <MenuItem v-for="menuOption in MENU_OPTIONS" v-slot="{ active }" :key="menuOption.label">
          <button
            :class="[
              active
                ? 'bg-primary text-secondary dark:bg-base-100 dark:text-primary'
                : 'text-primary dark:text-base-100',
              'flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold',
            ]"
            @click="router.push(menuOption.route)"
          >
            {{ menuOption.label }}
          </button>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>
