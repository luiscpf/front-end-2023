<template>
    <div>
        <input type="text" v-model="pesquisa">
        <button @click="getLista(pesquisa)">Search</button>
    </div>
    <div v-for="item in lista"> 
        <img :src="item" alt="" width="150">
    </div>
</template>


<script setup>

    import { ref} from 'vue'

    const pesquisa = ref('')
    const lista = ref([])
    const getLista = (pesquisa)=>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+pesquisa)
    .then(data=>data.json())
    .then(res =>res.drinks)
    .then(final => lista.value = final.map(dados=>dados.strDrinkThumb))
    }

</script>