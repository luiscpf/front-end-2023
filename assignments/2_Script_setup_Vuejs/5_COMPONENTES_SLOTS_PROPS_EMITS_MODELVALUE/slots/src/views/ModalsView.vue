<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show Modal</button>
        <Modal 
        v-if="showModal">
            <!-- SLOTS -->
            <!-- <template #title> My new Title </template> -->
            <template v-slot:title> My new Title </template>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sequi fugit labore repellendus placeat deleniti iusto maiores, dolore corporis officiis.</p>
        </Modal>
    </div>
</template>



<script setup>

import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)



</script>

