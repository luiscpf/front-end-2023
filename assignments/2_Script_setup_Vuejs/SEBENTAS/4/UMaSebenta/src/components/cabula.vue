<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ cabula.content }}
                <div class="has-text-right has-text-grey-light">
                    <small>{{ cabula.content.length }} {{ numLetrasText }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="'/editApontamento/'+cabula.id" class="card-footer-item">Edit</RouterLink>
            <a href="#" @click.prevent="$event => cabulasStore.deleteApontamento(cabula.id)" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useCabulasStore } from '@/stores/cabulasStore';

    const cabulasStore = useCabulasStore();
    const props = defineProps({
        cabula: {
            type:Object,
            required:true
        }
    });

    // const emit = defineEmits(['deleteClicked'])

    // const handleDeleteClicked = () => {
    //     emit('deleteClicked', props.cabula.id)
    // }

    const numLetrasText = computed(
        () => props.cabula.content.length > 1 ? 'carateres' : 'caratér'
    );
</script>

