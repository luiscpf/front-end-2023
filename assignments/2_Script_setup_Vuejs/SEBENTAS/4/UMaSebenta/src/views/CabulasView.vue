<template>
    <div class="cabulas">
        <!-- <AddEditApontamento /> -->
        <AddEditApontamento v-model="newApontamento" ref="newApontamentoRef">
            <template #buttons>
                <button class="button is-link has-background-success" @click="addApontamento" :disabled="!newApontamento">
                Adicionar
                </button>
            </template>
        </AddEditApontamento>

      

        <Apontamento v-for="cabula in cabulasStore.apontamentos" :key="cabula.id" :cabula="cabula" />
        <!-- @deleteClicked="deleteApontamento" -->
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import Apontamento from '@/components/cabula.vue';
    import { useCabulasStore } from '@/stores/cabulasStore';
    import AddEditApontamento from '@/components/AddEditCabula.vue';

    const cabulasStore = useCabulasStore();
    const newApontamento = ref('');
    const newApontamentoRef = ref(null);

    const addApontamento = () => {
        cabulasStore.addApontamento(newApontamento.value);
    //     let id = new Date().getTime().toString()
    //     apontamentos.value.unshift({
    //         id,
    //         content: newApontamento.value
    //     })

        newApontamento.value = '';
        newApontamentoRef.value.focusTextarea();
    };

   


</script>
  
