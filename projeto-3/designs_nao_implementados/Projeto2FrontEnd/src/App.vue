<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
        <RouterLink to="/"></RouterLink> <!-- Imports the page associated to the path '/', which is the HomePage.vue in views  -->
        <!--<RouterLink to="/about">About</RouterLink>-->

  <RouterView />
</template>

<style scoped>

</style>
