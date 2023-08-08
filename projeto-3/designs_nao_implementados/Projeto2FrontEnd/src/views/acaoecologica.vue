<template>
  <Header />
  <div class="action-page">
    <div class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-4 mt-5">Página de Ação Ecológica</h1>
          <figure class="image mt-4">
            <img src="https://media.istockphoto.com/id/1308453603/pt/vetorial/carbon-footprint-infographic-co2-ecological-footprint-scheme-greenhouse-gas-emission-by.jpg?s=170667a&w=0&k=20&c=zse8LGCb4J3fOIJKW-FRU1f-93fK09aKxeHxjGryWOU=" alt="Carbon Footprint" />
          </figure>
        </div>
      </div>
    </div>
    <div v-if="!selectedCategory && !showDetails" class="category-select">
      <p>Selecione a categoria:</p>
      <div class="select">
        <select v-model="selectedCategory">
          <option value="">Selecionar a categoria</option>
          <option v-for="category in categories" :value="category">{{ category.name }}</option>
        </select>
      </div>
    </div>
    <div v-else-if="isLoading" class="loading-spinner">
      <div class="spinner"></div>
    </div>
    <div v-else-if="showDetails && ecoActions.length > 0" class="eco-actions-details">
      <div class="go-back-button">
        <button class="button is-link is-small" @click="goBack">Voltar</button>
      </div>
      <h2 class="title is-5 mt-4">Categoria: {{ selectedCategory.name }}</h2>
      <ul class="eco-actions-list">
        <li v-for="ecoAction in ecoActions" :key="ecoAction.id" class="eco-action-item">
          <div class="eco-action-content">
            <h3 class="title is-6">Descrição:</h3>
            <p>{{ ecoAction.nome }}</p>
            <h3 class="title is-6">Peso Ecológico:</h3>
            <p>{{ ecoAction.peso }}</p>
          </div>
          <div class="eco-action-image">
            <img :src="ecoAction.image" :alt="ecoAction.nome" class="image">
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="no-eco-actions">
      <div class="go-back-button">
        <button class="button is-link is-small" @click="goBack">Voltar</button>
      </div>
      <p>Nenhuma ação ecológica encontrada para a categoria selecionada.</p>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import axios from 'axios';

const baseUrl = 'https://umacarbono-default-rtdb.firebaseio.com';

export default {
  components: {
    Footer,
    Header,
  },
  name: 'ActionPage',
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
          this.ecoActions = filteredActions.length > 0 ? filteredActions : [];
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
.action-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: inherit; /* Set the background color to inherit */
  padding: 20px;
}

/* Remove the background-color from the hero-body */
.hero-body {
  background-color: transparent;
}

.action-page h1 {
  margin-top: 3rem;
}

.category-select {
  margin-top: 2rem;
}

.eco-actions-details {
  margin-top: 2rem;
}

.eco-actions-details .go-back-button {
  margin-bottom: 1.5rem;
}

.eco-actions-details .eco-action-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.eco-actions-details .eco-action-item:last-child {
  margin-bottom: 0;
}

.eco-actions-details .eco-action-content {
  flex: 1;
  margin-right: 1rem;
}

.eco-actions-details .eco-action-content p {
  margin-bottom: 0.5rem;
}

.eco-actions-details .eco-action-image {
  flex-shrink: 0;
  width: 200px;
  height: auto;
}

.no-eco-actions {
  margin-top: 2rem;
}

.loading-spinner {
  margin-top: 2rem;
}

.loading-spinner .spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ee5849;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

.go-back-button {
  animation: fadeIn 0.5s ease;
}

.button.is-link.is-small {
  margin-top: 0.5rem;
}

@media screen and (max-width: 768px) {
  .eco-actions-details .eco-action-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .eco-actions-details .eco-action-item .eco-action-content {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .eco-actions-details .eco-action-image {
    width: 100%;
  }
}
</style>

