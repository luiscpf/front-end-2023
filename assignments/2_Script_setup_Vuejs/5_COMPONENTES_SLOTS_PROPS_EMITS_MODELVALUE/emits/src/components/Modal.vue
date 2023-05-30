<template>
    <!-- <teleport to="body"> -->
    <teleport to=".modals-container">
        <div class="modal">
            
            <!-- PROPS -->
            <h1>{{ title }}</h1>
            <slot />
    
            <!-- <button  @click="$emit('hideModal')">Hide Modal</button>  -->
            <button  @click="handleButtonClick">Hide Modal</button> 
            
        </div>
    </teleport>
</template>

<script setup>

   
    //EMITS
    
    const emit = defineEmits(['hideModal'])

    //HANDLE BUTTON CLICK

    const handleButtonClick = () =>{
        emit('hideModal')
    }





    //PROPS
     const props = defineProps({
        title:{
            type: String,
            default: 'No title specified'
        }
    })
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