<template>
    <!-- <teleport to="body"> -->
    <teleport to=".modals-container">
        <div class="modal">
            
            <!-- PROPS -->
            <h1>{{ title }}</h1>
            <slot />
    
            <button  @click="$emit('update:modelValue', false)">Hide Modal</button> 
            
            
        </div>
    </teleport>
</template>

<script setup>

    //PROPS
    const props = defineProps({
        modelValue:{
            type: Boolean, 
            default: false

        },
        title:{
            type: String,
            default: 'No title specified'
        }
    })

   
    //EMITS
    
    const emit = defineEmits(['update:modelValue', 'hideModal'])

    //HANDLE BUTTON CLICK

    const handleButtonClick = () =>{
        emit('update:modelValue', false)
    }





 
    // const props = defineProps(['title'])
    // para acededer ao valor no codigo teria de usar props.title


</script>



<style>

.modal{
    background: beige;
    padding: 10px;
    position: absolute; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
} 

</style>