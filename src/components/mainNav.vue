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
    @apply uppercase hover:bg-gray-200 md:mr-4 px-2 md:py-1 rounded mt-2 md:mt-5 text-xs md:text-base md:block;
  }

</style>
<template>
<!-- Main content -->
<main class=" border-b-2 md:border-b-0 md:pb-0 mb-10 py-2">
  <!-- <Bars3Icon class="flex justify-start sm:block md:hidden h-8 w-8 mt-4" @click="toggleNavMobile"/> -->
    <div class="flex flex-row md:flex-col justify-center">
      
        <!-- <img src="../imgs/theme-3-corrected.png" alt="The University of Alabama" class=" mt-2 md:mt-0 mb-2  w-40 md:w-80 mx-auto block"> -->
        <nav class="flex justify-center ">
            <RouterLink to="/"><img src="../imgs/theme-3-corrected.png" alt="The University of Alabama" class="w-36 hidden md:block "></RouterLink>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/#resume">Resume</RouterLink>
            <RouterLink to="/#publication">Publication</RouterLink>
            <RouterLink to="/#projects">projects</RouterLink>
            <!-- <RouterLink to="/#playground">Playground</RouterLink> -->
            
        </nav>
    </div>
</main>
</template>
