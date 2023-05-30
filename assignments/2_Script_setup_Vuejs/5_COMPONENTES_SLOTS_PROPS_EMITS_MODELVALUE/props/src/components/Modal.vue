<template>
    <!-- <teleport to="body"> -->
    <teleport to=".modals-container">
        <div class="modal">
            <!-- PROPS -->
            <h1>{{ title }}</h1>
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
    
    // Se não precisar de especificareste tipo devalidações,pode inicializar os propsapenas num array. 
    //Se precisar de usar o valor de title no código, este pode ser acedido simplesmente por props.title


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