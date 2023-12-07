<script setup>

import MainFooter from './mainFooter.vue';

import MainNav from './mainNav.vue';

</script>
<template >
<div class=" flex flex-col h-screen">
  <MainNav class="xl:container m-5 mb-auto" />

    <slot />


  <MainFooter class="bg-gray-100 p-4 text-center text-white" />
</div>
</template>
