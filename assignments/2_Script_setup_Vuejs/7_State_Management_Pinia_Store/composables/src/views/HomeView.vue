<template>
  <div class="home">
    
    <h1 ref="appTitleRef">{{ appTitle }}</h1><br>
    <h3>{{ counter.title }}:</h3>

    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">-2</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <!-- <input v-model.number="counterData.count" type="number" min="0" step="1" class="counter-input"> -->
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">+2</button><br>
    </div>

    <p class="oddEven">This counter is {{ counter.oddOrEven }}</p>

  </div>

  <div class="edit">
    <h4>Edit counter title:</h4>
    <input v-model="counter.title" type="text">
  </div>
</template>

<script setup>
  // import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue';
  // import { useCounter } from '@/use/useCounter';
  // const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter();
  import { ref, onMounted } from 'vue'
  import { useCounterStore } from '@/stores/counter'

  const counter = useCounterStore()

  const appTitle = 'My Okay Counter App:'


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
