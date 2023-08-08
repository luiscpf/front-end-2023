<template>
    <nav class="navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        
        <div class=" navbar-item has-text-centered is-inline-block">
            <h1 class="navbar-logo" style="color: greenyellow;">Calculator</h1>
        </div>
       
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showMobileNav = !showMobileNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
        <div class="navbar-end">
          
            <RouterLink to="/" class="navbar-item" active-class="is-active">Home</RouterLink>
            <RouterLink to="/about" class="navbar-item" active-class="is-active">Join Us</RouterLink>
            <RouterLink to="/search" class="navbar-item" active-class="is-active">Search Categories</RouterLink>
            <RouterLink to="/action" class="navbar-item" active-class="is-active">Ecological Action</RouterLink>
            <RouterLink to="/carbon" class="navbar-item" active-class="is-active">Carbon Footprint</RouterLink>
            <RouterLink to="/admin" class="navbar-item" active-class="is-active">Administration</RouterLink>
            <div class="navbar-item" active-class="is-active">
                <RouterLink v-if="!userId" to="/regist" class="navbar-item button is-success" active-class="is-active">SignUp/Login</RouterLink>
                <div v-else class="navbar-item">User ID: {{ userId }}</div>
            </div>
        </div>
       
      </div>
    </nav>
</template>
  
<script>
  
    import { RouterLink } from 'vue-router';
  
    export default {
      components: {
        RouterLink,
      },
      data() {
        return {
          userId: null, // Set the user ID here when logged in
          showMobileNav: false,
        };
      },
    };
</script>
  
<style scoped>
    /* Bulma styles */
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
  
    /* Custom styles */
    @media (max-width: 1023px) {
      .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
      }
    }
  
    /* Custom navbar styles */
    .navbar-item {
      display: flex;
      align-items: center;
    }
  
    .navbar-item.is-active {
      background-color: #00d1b2;
      color: #ffffff;
    }
</style>