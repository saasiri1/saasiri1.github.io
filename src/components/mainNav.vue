<script setup>
import { RouterLink } from 'vue-router';
import {
    Bars3Icon, LockClosedIcon, XCircleIcon, XMarkIcon
} from "@heroicons/vue/24/outline";

import { ref } from 'vue'

const isNavMobileOpen = ref(false)
const toggleNavMobile = () => {
  isNavMobileOpen.value = !isNavMobileOpen.value;

};


</script>
<style scoped>
  nav a {
    @apply uppercase hover:bg-gray-200 mr-4 px-2 py-1 rounded mt-5 text-sm md:text-base hidden md:block;
  }
  navMobile a {
    @apply uppercase hover:bg-gray-200 mr-4 px-2 py-1 rounded mt-5 text-sm md:text-lg;
  }
</style>
<template>
<!-- Main content -->
<main class=" border-b-2 md:border-b-0 md:pb-0 mb-10">
    <div class="flex flex-row md:flex-col justify-center items-center">
      <Bars3Icon class="block md:hidden h-8 w-8 mt-4" @click="toggleNavMobile"/>
        <img src="../imgs/theme-3-corrected.png" alt="The University of Alabama" class="mt-3 mb-2 md:mt-10 w-40 md:w-80 mx-auto block">
        <nav class="flex justify-center ">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/resume">Resume</RouterLink>
            <RouterLink to="/publication">Publication</RouterLink>
            <RouterLink to="/research">Research</RouterLink>
            <RouterLink to="/playground">Playground </RouterLink>
        </nav>
    </div>
</main>

<!-- Mobile navigation covering the whole page -->
<navMobile class="md:hidden fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white" v-bind:class="{'translate-x-0':isNavMobileOpen,'translate-x-full':!isNavMobileOpen}">
  <XMarkIcon class="absolute top-0 right-0 h-8 w-8 mt-4 mr-5" @click="toggleNavMobile" />
  <img src="../imgs/theme-3-corrected.png" alt="Sultan Asiri image" class="w-40 h-12 top-0">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/resume">Resume</RouterLink>
    <RouterLink to="/publication">Publication</RouterLink>
    <RouterLink to="/research">Research</RouterLink>
    <RouterLink to="/playground">Playground </RouterLink>
</navMobile>
</template>
