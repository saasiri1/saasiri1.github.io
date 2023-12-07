<script setup>
import { RouterLink, RouterView } from 'vue-router'
import baseModel from './components/baseModel.vue'
import HomePage from './views/homePage.vue';

</script>

<template>
  <baseModel >
    <RouterView />
  </baseModel>
</template>
