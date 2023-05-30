<template>
    <div class="Review-edit">
        <AddEditReview v-model="contentReview" ref="contentReviewRef">
            <template #buttons>
                <button class="button is-link is-light mr-3" 
                @click="$event => $router.back()"> 
                Cancel
                </button>
                <button class="button is-link has-background-success"
                @click="handleSaveClicked" 
                :disabled="!contentReview">
                Save
                </button>
            </template>
        </AddEditReview>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import { useRoute , useRouter } from 'vue-router';
    import AddEditReview from '@/components/AddEditReview.vue';
    import { useReviewsStore } from '@/stores/reviewsStore';

    const reviewsStore = useReviewsStore();
    const contentReview= ref('You can change text here.');
    const contentReviewRef = ref(null);
    
    const route = useRoute();
    const router = useRouter();
    const handleSaveClicked = () => { 
        reviewsStore.updateReview(route.params.id, contentReview.value);
        router.push('/');
    }
    
    contentReview.value = reviewsStore.getReviewContent(route.params.id);

</script>