<script setup>

import MainFooter from './mainFooter.vue';

import MainNav from './mainNav.vue';

</script>
<template >
<div class=" flex flex-col h-screen">
  <MainNav class="md:container m-5 mb-auto" />

  <div class="flex-grow lg:container">
    <slot />
  </div>

  <MainFooter class="bg-gray-100 p-4 text-center text-white" />
</div>
</template>
