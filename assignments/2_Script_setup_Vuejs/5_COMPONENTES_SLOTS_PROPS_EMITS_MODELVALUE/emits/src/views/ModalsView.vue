<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show Modal</button>
        <Modal 
        v-if="showModal"
        @hideModal="showModal=false"
        title="My modal title (via prop)">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis iure aperiam veritatis, rerum impedit repudiandae maiores cumque corporis, similique in quia. Eligendi in placeat reprehenderit itaque harum quis accusantium obcaecati cumque odio officiis nesciunt ut dolore assumenda, optio eaque accusamus deleniti error provident dolores, ex, nihil maxime molestias repudiandae labore?</p>
        </Modal>
    </div>
</template>



<script setup>

import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)



</script>

