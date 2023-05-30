<template>
    <!-- <teleport to="body"> -->
    <teleport to=".modals-container">
        <div class="modal">
            <!-- SLOTS -->
            
            <h1><slot name="title" /></h1>
            <slot />
           
            <button>Hide Modal</button> 
            
        </div>
    </teleport>
</template>

<script setup>

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