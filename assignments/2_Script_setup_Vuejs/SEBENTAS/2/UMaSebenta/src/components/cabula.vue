<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ cabula.content }}
                <div class="has-text-right has-text-grey-light"> -
                    <small>{{ cabula.content.length}}  {{ numLetrasText }}</small> 
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" @click.prevent="handleDeleteClicked" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>

    import { computed } from 'vue'
    
    const props = defineProps({
        cabula : {
            type:Object,
            required:true
        }
    })
    const emit = defineEmits(['deleteClicked'])

    const handleDeleteClicked = () => {
        emit('deleteClicked', props.cabula.id)
    }
    const numLetrasText = computed(() => props.cabula.content.length > 1 ? 'carateres':'caráter')
    
</script>