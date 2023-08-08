<template>
  <div class="container has-text-centered">
    <img :src="error" alt="Error Image" style="max-width: 300px;">
    <h1 class="title is-1 has-text-black">Ooops...</h1>
    <h2 class="subtitle is-3 has-text-black">We can't find the page you are looking for</h2>
    <p class="has-text-black">Maybe this page moved? Got deleted? Is hiding out in the middle of the trash? Never existed in the first place?</p>
  </div>
</template>

<script setup>

import error from '@/assets/error.jpg';



</script>

<style scoped>
.container {
  height: 100vh;
}

@media screen and (max-width: 59em) {
  .container {
    width: 100%;
    height: fit-content;
    text-align: center;
  }
}
</style>