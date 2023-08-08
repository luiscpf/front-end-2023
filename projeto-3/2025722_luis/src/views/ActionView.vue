<template>
  <div class="Ação-page">
    <h1>Página de Ação Ecológica</h1>
    <div v-if="!selectedCategory && !showDetails">
      <p>Seleciona a categoria:</p>
      <select v-model="selectedCategory">
        <option value="">Seleciona a categoria</option>
        <option v-for="category in categories" :value="category">{{ category.name }}</option>
      </select>
    </div>
    <div v-else-if="isLoading">
      <div class="loading-spinner">
        <div class="spinner"></div>
      </div>
    </div>
    <div v-else-if="showDetails && ecoActions.length > 0">
      <div class="go-back-button"></div>
      <button @click="goBack">Voltar</button>
      <h2>Categoria {{ selectedCategory.name }}:</h2>
      <ul>
        <li v-for="ecoAction in ecoActions" :key="ecoAction.id">
          <!--<h3>ID: {{ ecoAction.id }}</h3> MOSTRA O ID DA API K O PROF DEU--> 
          <p>Descrição: {{ ecoAction.nome }}</p>
          <p>Peso Ecológico: {{ ecoAction.peso }} ({{ ecoAction.peso - ecoAction.nome.length }} + {{ ecoAction.nome.length }})</p>
          <img :src="ecoAction.image" :alt="ecoAction.nome" />
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="go-back-button">
        <button @click="goBack">Go Back</button>
      </div>
      <p>No eco actions found for the selected category.</p>
    </div>
  </div>

</template>

<script>

import axios from 'axios';

const baseUrl = 'https://umacarbono-default-rtdb.firebaseio.com';

export default {

  name: 'ActionView',
  data() {
    return {
      ecoActions: [],
      isLoading: false,
      selectedCategory: null,
      categories: [
        { id: 'reciclagem', name: 'Reciclagem' },
        { id: 'habitos alimentares', name: 'Hábitos Alimentares' },
        { id: 'energia', name: 'Energia' },
      ],
      showDetails: false,
    };
  },
  watch: {
    selectedCategory(newValue) {
      if (newValue) {
        this.fetchEcoActions(newValue.id);
        this.showDetails = true;
      } else {
        this.ecoActions = [];
        this.showDetails = false;
      }
    },
  },
  methods: {
    fetchEcoActions(categoryId) {
      this.isLoading = true;
      const url = `${baseUrl}/acoes.json`;
      axios
        .get(url)
        .then(response => {
          const ecoActions = response.data;
          const filteredActions = ecoActions.filter(
            action => action && action.categoria === categoryId
          );
          this.ecoActions = filteredActions.length > 0 ? filteredActions.map(action => ({...action, peso: action.peso + action.nome.length})) : [];
          this.isLoading = false;
        })
        .catch(error => {
          console.error('Error getting eco actions:', error);
          this.isLoading = false;
        });
    },
    goBack() {
      this.selectedCategory = null;
      this.showDetails = false;
    },
  },
};
</script>

<style scoped>
.Ação-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.Ação-page h1 {
  margin-top: 64px;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.Ação-page h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.Ação-page h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.Ação-page p {
  margin-bottom: 10px;
}

.Ação-page ul {
  list-style: none;
  padding: 0;
}

.Ação-page li {
  margin-bottom: 20px;
}

.Ação-page img {
  width: 200px;
  height: auto;
}

/* Go Back Button */
.go-back-button {
  margin-top: 20px;
  animation: fadeIn 0.5s ease;
}


/* Loading Animation */
.loading-spinner {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.5s ease;
}

.loading-spinner .spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ee5849;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
}
</style>
