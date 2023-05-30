<template>
  <div class="container">
    
    <div class="search-container">
      <input type="text" @keyup.enter="searchCocktail" v-model="searchApi" placeholder="Insert Cocktail name" />
      <button @click="searchCocktail" class="button is-link">Search</button>
    </div>
    <div class="cocktails">
      <div v-for="cocktail in cocktails" :key="cocktail.idDrink" class="cocktail">
        <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
        <p class="has-text-white">{{ cocktail.strDrink }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // Dados
  const searchApi = ref('');
  const cocktails = ref([]);

  // Função para pesquisar cocktails
  const searchCocktail = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchApi.value}`);
    const data = await response.json();
    cocktails.value = data.drinks || [];
  };
</script>

<style scoped>

.container {
  padding: 1.5rem;
}

.search-container {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.search-container input {
  flex: 1;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: none;
  border-bottom: 1px solid #ccc;
}

.search-container button {
  padding: 0.5rem 1rem;
  border: none;
  color: #fff;
 
}

.cocktails {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.cocktail {
  text-align: center;

}

.cocktail img {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 0.5rem;
}

.cocktail p {
  margin-top: 0.5rem;
}
</style>