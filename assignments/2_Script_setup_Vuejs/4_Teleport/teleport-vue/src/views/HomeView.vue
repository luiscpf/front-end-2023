<template>
  <div class="Home">
      <h1>Home</h1>
      <button @click="showHome =true">Show Home</button>
      
      <teleport to="body"> 
          <div
          v-if="showHome" 
          class="house">
              <h1>This is a house:</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptatem atque mollitia dolore sequi amet aliquam obcaecati necessitatibus, molestiae modi incidunt! Quia minima numquam totam autem, illum rerum laudantium officia!</p>
              <button @click="showHome = false">Hide Home</button>
          </div>
      </teleport>  
  </div>
</template>

<style>

.Home{
  text-align: center;
  position: relative;
  margin-top: 2px;
 
}
.house{
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin-bottom: 10px;
 
     
}

</style>

<script setup>

import { ref } from 'vue'

const showHome = ref(false)



</script>