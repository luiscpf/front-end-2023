<template>
    <div>
      <h1>Post Individual</h1>
      <p>Conteudo do Post com o ID: {{ $route.params.id }}</p>
      <p><RouterLink to="/postdetails">&lt; Voltar</RouterLink></p>
    </div>
    <div class="post-btn">
      <button @click="goFirstpost">1º Post</button>
      <button @click=" goPostDtls">Todos os Posts</button>
      <button @click="goHome">Home</button>
      <button @click="goModals">Modals</button>
    </div><br>
    <button @click="ShowPostId">id</button>
</template>

<style>
.post-btn{
  display: flex;
  gap: 5px;
  margin-top: 15px;
  margin-bottom: 5px;
}
</style>

<script setup>

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const goFirstpost = () =>{
    router.push({
        name: 'post',
        params: {
        id: '1'
        }
    })
}

const goPostDtls = () =>{
    router.push('/postdetails')
}

const goHome = () =>{
    router.push({name: 'home'})
}

const goModals = () =>{
    router.push('/modals')
}

const ShowPostId =()=>{
    alert('O id do Post é ' + route.params.id)

}


</script>