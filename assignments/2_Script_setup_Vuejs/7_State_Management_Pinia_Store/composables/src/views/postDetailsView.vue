<template>
  <div class="post">
    <h1>Posts</h1>
    <ul>
      <li 
      v-for="post in posts" 
      :key="post.id">
       
      <!-- Usando a interpolação {{ }} para exibir o nome -->
        <RouterLink :to="`/postdetails/${post.id}`">{{ post.title }}</RouterLink>
      </li>

    </ul>
    
    <textarea name="" id="" cols="30" rows="10"></textarea><br>
    <button
      @click="counter.increaseCounter(1)"
      class="counter-button">
      {{ counter.count }}
    </button>

  </div>
    <!-- <ul>
      <li>
        <RouterLink to="/PostDetail/id1">Post 1</RouterLink>
      </li>
      ...
    </ul>  -->
   
    
</template>

<script setup>

  //Import defineDirective from Vue 

  // import { ref } from 'vue';
  // import { useCounter } from '@/use/useCounter';
  import { ref, onMounted } from 'vue'
  import { useCounterStore } from '@/stores/counter'

  const counter = useCounterStore()

  const posts = ref ([
    {
      id: 'id1',
      title: 'Post 1'
    },
    {
      id: 'id2',
      title: 'Post 2'
    },
    {
      id: 'id3',
      title: 'Post 3'
    }
  ]);

  const { counterData, increaseCounter } = useCounter();

</script>

<style>
  .counter-button {
    font-size: 70px;
    width: 300px;
    font-weight: 700;
    background-color: lightcoral;
    border-radius: 7px;
  }
</style>
