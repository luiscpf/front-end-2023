<template>
    


    <div class="Review-box">
        
        
        <AddEditReview v-model="newReview" ref="newReviewRef">
            <template #buttons>
                <button class="button is-link has-background-link-dark" @click="addReview" :disabled="!newReview">
                Add
                </button>
            </template>
        </AddEditReview>


        <Review v-for="inserido in reviewsStore.reviews" :key="inserido.id" :inserido="inserido" />
     
    </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import Review from '@/components/review.vue';
    import { useReviewsStore } from '@/stores/reviewsStore';
    import AddEditReview from '@/components/AddEditReview.vue';

    const reviewsStore = useReviewsStore();
    const newReview = ref('');
    const newReviewRef = ref(null);

    onMounted(()=>{ 
        reviewsStore.getReview();
    });

    const addReview = () => {
        reviewsStore.addReview(newReview.value);


        newReview.value = '';
        newReviewRef.value.focusTextarea();
    };

</script>




