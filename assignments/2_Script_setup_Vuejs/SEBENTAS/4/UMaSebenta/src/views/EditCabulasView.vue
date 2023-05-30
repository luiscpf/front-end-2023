<template>
    <div class="cabulas">
        <AddEditApontamento v-model="contentApontamento" ref="contentApontamentoRef">
            <template #buttons>
                <button class="button is-link is-light mr-3" 
                @click="$event => $router.back()"> 
                Cancelar
                </button>
                <button class="button is-link has-background-success"
                @click="handleSaveClicked" 
                :disabled="!contentApontamento">
                Gravar
                </button>
            </template>
        </AddEditApontamento>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import { useRoute , useRouter } from 'vue-router';
    import AddEditApontamento from '@/components/AddEditCabula.vue';
    import { useCabulasStore } from '@/stores/cabulasStore';

    const cabulasStore = useCabulasStore();
    const contentApontamento = ref('texto para gravar');
    const contentApontamentoRef = ref(null);

    const route = useRoute();
    const router = useRouter();
    const handleSaveClicked = () => { 
        cabulasStore.updateApontamento(route.params.id, contentApontamento.value);
        router.push('/');
    }
    
    contentApontamento.value = cabulasStore.getApontamentoContent(route.params.id);

</script>