<template>
  <div>
   
      <div class="categories-page">
        <h1>Página de Pesquisa de Categorias Ecológicas Recomendadas</h1>
        <div class="categories">
          <h2>Categorias:</h2>
          <div class="category" v-for="category in categories" :key="category.id" @click="toggleCategory(category)">
            <input type="checkbox" :id="category.id" :checked="selectedCategories.includes(category)" />
            <label :for="category.id">{{ category.name }}</label>
          </div>
        </div>
        <button @click="searchRecommendedCategories">Buscar Recomendações</button>
        <div class="recommended-categories" v-if="recommendedCategories.length > 0">
          <h2>Categorias Ecológicas Recomendadas:</h2>
          <div class="recommended-category" v-for="category in recommendedCategories" :key="category.id">
            <span class="category-name">{{ category.name }}</span>
          </div>
        </div>
      </div>
   
  </div>
</template>

<script>

export default {

  name: 'SearchView',
  data() {
    return {
      categories: [
        { id: 1, name: 'Energia Renovável' },
        { id: 2, name: 'Reciclagem' },
        { id: 3, name: 'Transporte Sustentável' },
        // Add more categories as needed
      ],
      selectedCategories: [],
      recommendedCategories: [],
    };
  },
  methods: {
    toggleCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter((c) => c !== category);
      } else {
        this.selectedCategories.push(category);
      }
    },
    searchRecommendedCategories() {
      // Clear recommended categories
      this.recommendedCategories = [];

      // Simulate API call for each selected category
      this.selectedCategories.forEach((category) => {
        // Simulating an API call based on the selected category
        // Replace the code below with the actual API call logic
        // I'll use a setTimeout to simulate API response time
        setTimeout(() => {
          // Here you can make the actual API call based on the selected category
          // Pass the selected category as a parameter to the API

          // I'll use a fixed set of recommended categories for example purposes
          let recommendedCategories = [];

          if (category.name === 'Energia Renovável') {
            recommendedCategories = [
              { id: 1, name: 'Energia Solar' },
              { id: 2, name: 'Energia Eólica' },
              { id: 3, name: 'Energia Hidrelétrica' },
            ];
          } else if (category.name === 'Reciclagem') {
            recommendedCategories = [
              { id: 4, name: 'Reciclagem de Papel' },
              { id: 5, name: 'Reciclagem de Plástico' },
              { id: 6, name: 'Reciclagem de Vidro' },
            ];
          } else if (category.name === 'Transporte Sustentável') {
            recommendedCategories = [
              { id: 7, name: 'Bicicleta' },
              { id: 8, name: 'Transporte Público' },
              { id: 9, name: 'Carro Elétrico' },
            ];
          }

          // Add recommended categories to the overall recommended categories list
          this.recommendedCategories = [...this.recommendedCategories, ...recommendedCategories];
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
.categories-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.categories-page h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.categories {
  margin-top: 20px;
}

.category {
  margin-bottom: 10px;
}

.category label {
  margin-left: 10px;
}

.category input[type="checkbox"] {
  margin-right: 5px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

.recommended-categories {
  margin-top: 20px;
}

.recommended-categories h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.recommended-category {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.category-name {
  font-size: 16px;
}
</style>
