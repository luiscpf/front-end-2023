<template>
  <div class="post">
    <h1>Posts</h1>
    <ul>
      <li 
      v-for="post in posts" 
      :key="post.id">
       
      <!-- Usando a interpolação {{ }} para exibir o nome -->
        <RouterLink :to="`/postdetails/${post.id}`">{{ post.title}}</RouterLink>
      </li>

    </ul>
    
    <textarea name="" id="" cols="30" rows="10"></textarea><br>
    <button
      @click="increaseCounter(1)"
      class="counter-button">
      {{ counterData.count }}
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

  import { ref } from 'vue';
  import { useCounter } from '@/use/useCounter';

  // import { ref, defineDirective } from 'vue'
  // import { vAutofocus } from '@/directives/vAutofocus'

  //Register the vAutofocus directive in your Vue component using the directives option. 

  // defineDirective('autofocus', vAutofocus);

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
