<template>
    


    <div class="admin-box">
        
        
        <TextAdmin v-model="newAdmin" ref="newAdminRef">
            <template #buttons>
                <button class="button is-link has-background-link-dark" @click="addAdmin" :disabled="!newAdmin">
                Add
                </button>
            </template>
        </TextAdmin>


        <AddEditAdmin v-for="inserido in AdminsStore.Admins" :key="inserido.id" :inserido="inserido" />
     
    </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import AddEditAdmin from '@/components/AddEditAdmin.vue';
    import { useAdminsStore } from '@/stores/AdminsStore';
    import TextAdmin from '@/components/TextAdmin.vue';

    const AdminsStore = useAdminsStore();
    const newAdmin = ref('');
    const newAdminRef = ref(null);

    onMounted(()=>{ 
        AdminsStore.getAdmin();
    });

    const addAdmin = () => {
        AdminsStore.addAdmin(newAdmin.value);


        newAdmin.value = '';
        newAdminRef.value.focusTextarea();
    };

</script>




