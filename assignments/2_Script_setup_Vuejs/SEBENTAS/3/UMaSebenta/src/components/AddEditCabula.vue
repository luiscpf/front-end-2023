<template>
    <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea :value="modelValue" @input="$event => emit('update:modelValue', $event.target.value)" ref="newApontamentoRef" class="textarea" placeholder="Adicionar apontamento"></textarea>
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
    const emit = defineEmits(['update:modelValue']);
    const props = defineProps({
        modelValue:{
            type:String,
            required:true
        }
    });
</script>




