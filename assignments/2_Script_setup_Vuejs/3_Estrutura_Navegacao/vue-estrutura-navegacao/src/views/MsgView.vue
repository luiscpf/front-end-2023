<template>
    <div>
      <h1>Mensagem Individual</h1>
      <p>Conteudo da mensagem com o ID: {{ $route.params.id }}</p>
      <p><RouterLink to="/Msgs">&lt; Voltar</RouterLink></p>
    </div>
    <div class="msg-btn">
      <button @click="goFirstMsg">1ª Mensagem</button>
      <button @click="goMsgs">Todas as Mensagens</button>
      <button @click="goHome">Home</button>
    </div><br>
    <button @click="ShowMsgId">id</button>
</template>

<style>
.msg-btn{
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

const goFirstMsg = () =>{
  router.push({
    name: 'msg',
    params: {
      id: '1'
    }
  })
}

const goMsgs = () =>{
  router.push('/msgs')
}

const goHome = () =>{
  router.push({name: 'home'})
}

const ShowMsgId =()=>{
  alert('O id da Mensagem é ' + route.params.id)

}


</script>