<template>
  <NavBar />
  <header>
    <div class="container is-max-desktop px-2 py-4">

      <RouterView />
      <!-- 
      <nav>
        <RouterLink class="button" to="/">Apontamentos</RouterLink>
        <RouterLink to="/stats">Estatística</RouterLink>
      </nav> -->
    </div>
  </header>

</template>


<script setup>

import NavBar from '@/components/NavBar.vue';


</script>



<style>
@import 'bulma/css/bulma.min.css';
</style>
