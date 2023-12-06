<script setup>

import MainFooter from './mainFooter.vue';

import MainNav from './mainNav.vue';

</script>
<template >
  <div class="m-5 md:container flex flex-col ">
    <!-- MainNav -->
    <MainNav class="mb-auto" />

    <!-- Slot for your page content -->
    <slot class="flex-grow" />


  </div>
      <!-- MainFooter -->
      <MainFooter />
</template>
