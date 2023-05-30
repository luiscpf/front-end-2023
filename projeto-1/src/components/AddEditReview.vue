<template>
    <div class="card has-background-link-light p-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea :value="modelValue" @input="$event => emit('update:modelValue', $event.target.value)" 
                    ref="textareaRef" class="textarea" placeholder="Share with us your review"></textarea>
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['update:modelValue']);
    const props = defineProps({
        modelValue:{
            type:String,
            required:true
        }
    });

    const textareaRef = ref(null);
    const focusTextarea = ()=> {
        textareaRef.value.focus();
    }; 
    
    defineExpose({ 
        focusTextarea
    });

</script>




