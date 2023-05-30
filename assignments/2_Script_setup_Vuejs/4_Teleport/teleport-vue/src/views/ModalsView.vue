<template>
    <div class="modals">
        <div v-if="!showModal">
            <h1>Modals</h1>
            <button @click="toggleModal">Show Modal</button>
        </div>
        
        <teleport to=".modals-container"> 
            <div v-if="showModal" class="modal">
                <h1>This is a modal:</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptatem atque mollitia dolore sequi amet aliquam obcaecati necessitatibus, molestiae modi incidunt! Quia minima numquam totam autem, illum rerum laudantium officia!</p>
                <button @click="toggleModal">Hide Modal</button>
            </div>
        </teleport>  
    </div>
</template>
<!-- <template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal =true">Show Modal</button>
        
        <teleport to="body"> 
            <div
            v-if="showModal" 
            class="modal">
                <h1>This is a modal:</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptatem atque mollitia dolore sequi amet aliquam obcaecati necessitatibus, molestiae modi incidunt! Quia minima numquam totam autem, illum rerum laudantium officia!</p>
                <button @click="showModal = false">Hide Modal</button>
            </div>
        </teleport>  
    </div>
</template> -->

<style>
.modals{
    text-align: center;
    position: relative;
    margin-top: 2px;
   
}
.modal{
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    margin-bottom: 10px;
    text-align: center;
       
}

</style>

<script setup>

import { ref } from 'vue'

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}



</script>