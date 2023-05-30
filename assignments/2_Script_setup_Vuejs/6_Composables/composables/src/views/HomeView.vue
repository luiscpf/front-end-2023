<template>
  <div class="home">
    
    <h1>{{ appTitle }}</h1><br>
    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">-2</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <!-- <input v-model.number="counterData.count" type="number" min="0" step="1" class="counter-input"> -->
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">+2</button><br>
    </div>

    <p class="oddEven">This counter is {{ oddOrEven }}</p>

  </div>

  <div class="edit">
    <h4>Edit counter title:</h4>
    <input v-model="counterData.title" type="text">
  </div>
</template>

<script setup>

  import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue';
  import { useCounter } from '@/use/useCounter';

  
  const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter();

  const appTitle = 'My Okay Counter App:'

// const counterData = reactive({
//   count: 0,
//   title: 'My counter'
// })

// //Computed Properties
// const oddOrEven = computed (() =>{
//   if(counterData.count % 2 === 0) return 'even'
//   else return 'odd'
// })

// //Watchers

// watch(() => counterData.count,  (newCount)=> {
//   if (newCount === 20){
//     alert('Way to go! You made it to 20!!')
//   }
// })

// const increaseCounter = (amount) =>{
//   counterData.count += amount
// }

// const decreaseCounter = (amount) =>{
//   counterData.count = counterData.count - amount
// }


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


</style>
