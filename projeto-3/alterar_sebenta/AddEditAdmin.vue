<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ inserido.content }}
                <div class="has-text-right has-text-grey-light">
                    <small>{{ inserido.content.length }} {{ numLetrasText }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="'/editAdmin/'+ inserido.id" class="card-footer-item">Edit</RouterLink>
            <a href="#" @click.prevent="$event => AdminsStore.deleteAdmin(inserido.id)" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useAdminsStore } from '@/stores/AdminsStore';

    const AdminsStore = useAdminsStore();
    const props = defineProps({
        inserido: {
            type:Object,
            required:true
        }
    });

    
    const numLetrasText = computed(
        () => props.inserido.content.length > 1 ? 'carateres' : 'caratér'
    );
</script>

