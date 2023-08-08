<template>
  <footer class="footer has-background-black">
    <div class="content">
      <p class="has-text-white has-text-centered">
        <strong class="has-text-white">Vue.js Frontend Project Website</strong>
         done at <a href="https://www.uma.pt/" class="has-text-primary-dark">UMa</a> using  <RouterLink to="/error" class="has-text-primary-dark has-text-weight-bold">Random APIs 404</RouterLink>
      </p>
  
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';
import 'bulma/css/bulma.min.css';
  

export default {
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
/* Bulma styles */
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

/* Custom styles */
footer {
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>