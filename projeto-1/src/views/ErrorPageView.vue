<template>
    <div class="container has-text-centered">
      <img :src="error" alt="Error Image">
      <h1 class="title is-1 has-text-white">Ooops...</h1>
      <h2 class="subtitle is-3 has-text-white">We can't find the page you are looking for</h2>
      <p class="has-text-white">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</p>
      <p class="has-text-white">So let's return to...</p>
      <div class="btn">
        <button class="button is-link is-rounded mt-5" @click="redirectedToHomePage"><strong>The Home Page</strong></button>
      </div>
    </div>
</template>
  

<script setup>
import { useRouter } from 'vue-router'; // Import the useRouter function from vue-router
import error from '@/assets/error.png';

const router = useRouter(); // Get the router instance

const redirectedToHomePage = () => {
  // Redirect to the home page using Vue Router's router.push
  router.push('/');
};

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