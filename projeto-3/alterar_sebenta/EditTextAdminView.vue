<template>
    <div class="Admin-edit">
        <TextAdmin v-model="contentAdmin" ref="contentAdminRef">
            <template #buttons>
                <button class="button is-link is-light mr-3" @click="goBack">Cancel</button>
                <button class="button is-link has-background-success" @click="handleSaveClicked" :disabled="!contentAdmin">
                    Save
                </button>
            </template>
        </TextAdmin>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import TextAdmin from '@/components/TextAdmin.vue';
    import { useAdminsStore } from '@/stores/AdminsStore';

    const AdminsStore = useAdminsStore();
    const contentAdmin = ref('You can change text here.');
    const contentAdminRef = ref(null);

    const route = useRoute();
    const router = useRouter();

    const handleSaveClicked = (event) => {
        event.preventDefault(); // Prevent the default form submission
        AdminsStore.updateAdmin(route.params.id, contentAdmin.value);
        router.push('/');
    };

    const goBack = () => {
        router.back();
    };

    contentAdmin.value = AdminsStore.getAdminContent(route.params.id);
</script>