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

  <!-- Importar cabula.vue seugestão minha ver com professor-->
<!-- 
  <cabula /> -->

</template>


<script setup>

import NavBar from '@/components/NavBar.vue'
// import cabula from '@/components/cabula.vue'

</script>



<style>
@import 'bulma/css/bulma.min.css';
</style>
