<template>
    <div class="container">
      <div class="search-container">
        <input
          type="text"
          placeholder="Insert cocktail name"
          v-model="name"
          class="input"
        />
        <button @keyup.enter="searchCocktail" @click="search" class="button is-link">Search</button>
      </div>
      <div v-if="drink" class="result">
        <img :src="drink.strDrinkThumb" alt="" class="drink-image" />
        <h2 class="drink-title has-text-white">{{ drink.strDrink }}</h2>
        <h3 class="subtitle has-text-white">Ingredients:</h3>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient" class="ingredient has-text-white">
            {{ ingredient }}
          </li>
        </ul>
        <h3 class="subtitle has-text-white">Instructions:</h3>
        <p class="has-text-white">{{ drink.strInstructions }}</p>
      </div>
      <div v-else class="result">
        <h3 class="msg has-text-white">Please enter a drink name</h3>
      </div>
    </div>
  </template>
  
<script>
//Str propriedades do objeto returnado pela CocktailDBAPI
    export default {
        data() {
        return {
            name: "",              // Variable to store the name of the drink
            drink: null,           // information
            ingredients: [],       // ingredients
        };
        },
        methods: {
        search() {
            if (this.name.length === 0) {
            this.drink = null;
            } else {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.name)
                .then((response) => response.json())
                .then((data) => {
                const drink = data.drinks[0]; // Get the first drink from the response data
                if (drink) {
                    this.drink = drink; // Set the drink property with the retrieved drink
                    this.ingredients = this.getIngredients(drink); // Call getIngredients method to extract and set the ingredients
                } else {
                    this.drink = null;
                }
                })
                .catch(() => {
                this.drink = null;
                });
            }
        },
        getIngredients(drink) {
            const ingredients = [];
            for (let i = 1; i <= 15; i++) {
            const ingredient = drink["strIngredient" + i]; // Get the ingredient from the drink object based on the property name
            const measure = drink["strMeasure" + i]; // Get the measure from the drink object based on the property name
            if (ingredient && measure) {
                ingredients.push(`${measure} ${ingredient}`); //Combine measure and ingredient and push to the array
            }
            }
            return ingredients;
        },
        },
    };
</script>
  
<style scoped>
.container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}

.search-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.result {
    text-align: center;
}

.drink-image {
    max-width: 300px;
    margin-bottom: 10px;
}

.drink-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.ingredient {
    margin-bottom: 5px;
}
</style>