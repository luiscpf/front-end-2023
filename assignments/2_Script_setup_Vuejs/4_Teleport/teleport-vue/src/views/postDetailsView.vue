<template>
  <div class="about">
    <h1>Posts</h1>
    <ul>
      <li 
      v-for="post in posts" 
      :key="post.id">
        <!-- Usando a interpolação {{ }} para exibir o nome -->
        <RouterLink :to="`/postdetails/${post.id}`">{{ post.title}}</RouterLink>
      </li>
    </ul>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
    <!-- <ul>
      <li>
        <RouterLink to="/PostDetail/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/PostDetail/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/PostDetail/id3">Post 3</RouterLink>
      </li>
    </ul>  -->
</template>

<script setup>

  //Import defineDirective from Vue 

  import { ref } from 'vue'

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
  ])
</script>
