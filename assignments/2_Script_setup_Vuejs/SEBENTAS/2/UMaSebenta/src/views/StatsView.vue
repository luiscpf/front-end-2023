<template>
    <div class="stats">
        <div class="card">
            <header class="card-header"> 
                <p class="card-header-title">
                    Component
                </p>
                
                <button class="card-header-icon" aria-label="more options"> 
                    <span class="icon">
                        <i class="fas" aria-hidden="true"></i>
                    </span>
                </button>
            </header>
            <div class="card-content" > 
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <a href="#">@bulmaio</a>.
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>

            <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a> 
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
        Parte2

        <div class="card mb-4" v-for="i in 3">
            <div class="card-content">
                <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
        Parte3 falta script setup
            
        <!-- <div class="card mb-4" v-for="cabula in apontamentos" :key="cabula.id">
            <div class="card-content">
                <div class="content">
                {{ cabula.content }} 
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        
        </div> -->
                
    </div> 
</template>


<!-- <script>
{/* <script setup> */}

import { ref } from 'vue'


const apontamentos = ref([
    {
        id:"id1",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        id:"id2",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        id:"id3",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
]);

</script> -->
