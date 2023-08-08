<template>
  <NavBar />
  <header>
    <div class="container is-max-desktop px-2 py-4 mt-4 mb-4">
      
      <RouterView />
      
    </div>
  </header>

  <Footer />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
