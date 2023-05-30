<template>
  <div class="home">
    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">-2</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <input v-model.number="counterData.count" type="number" min="0" step="1" class="counter-input">
      <!-- <span class="counter">{{ counterData.count }}</span> -->
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">+2</button>
    </div>
  </div>

  <div class="edit">
    <h4>Edit counter title:</h4>
    <input v-model="counterData.title" type="text">
  </div>
</template>

<script setup>

import { reactive } from 'vue'

//import { ref } from 'vue'

//const counter = ref(0)

const counterData = reactive({
  count: 0,
  title: 'My counter'
})

const increaseCounter = (value) =>{
  counterData.count += value
}
const decreaseCounter = (valor) =>{
  counterData.count -= valor
}

/*const increaseCounter = () =>{
  counterData.count++
}
const decreaseCounter = () =>{
  counterData.count--
}*/

</script>


<style>

.home{
  text-align: center;
  padding: 20px;
}

.btn, .counter{
  font-size: 40px;
  margin: 10px;
}

.counter-input {
  font-size: 40px;
  width: 200px; /* Adjust the width to your preference */
  border: none; /* Hide the input box border */
  background-color: transparent; /* Hide the input box background color */
  color: inherit; /* Inherit the color from parent element */
  text-align: center; /* Center the text in the input box */
}

</style>


/*export default{

  data(){
    return{
      counter: 0
    }
  },

  methods:{
    increaseCouter(){
      this.counter++;
    },
    decreaseCouter(){
      this.counter--;
    } 
  }
}*/
