<template>
    <!-- <teleport to="body"> -->
    <teleport to=".modals-container">
        <div 
        class="modal">
            <h1>This is a modal</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis debitis ad odio a commodi laborum molestiae vitae tempore. Dicta similique accusamus eveniet rerum ea odit tempore saepe quos quam quis!</p>
            <button>Hide Modal</button> 
            
        </div>
    </teleport>
</template>

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