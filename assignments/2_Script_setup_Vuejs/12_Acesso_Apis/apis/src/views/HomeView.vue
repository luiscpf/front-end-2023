<template>

  <ListaCocktail :lista="lista" />
 
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner text-center">
    <div class="carousel-item active">
      <img class="d-block w-100" :src="lista[5]" >
    </div>
    <div class="carousel-item" v-for="imagem in lista" >
      <img :src="imagem" class="d-block w-100" >
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"> 
    <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"> 
      <span class="carousel-control-next-icon" aria-hidden="true"></span> 
      <span class="visually-hidden">Next</span>
  </button>
</div>


</template>

<script setup>

  import {ref} from 'vue'
  import ListaCocktail from '@/components/ListaCocktail.vue'

  const lista = ref([]) 

  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
  .then(data=> data.json())
  .then(res=> res.drinks)
  .then(final => lista.value = final.map(dados=>dados.strDrinkThumb)) 

</script>
