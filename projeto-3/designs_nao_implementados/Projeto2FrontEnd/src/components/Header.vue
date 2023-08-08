<template>
    <div>
        <!-- Header section -->
        <header>
            <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <!-- Logo -->
                    <a class="navbar-item" href="https://www.uma.pt/">
                        <img src="wp3322439-bar-wallpaper.jpg" width="112" height="28">
                    </a>

                    <!-- Mobile menu button -->
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <!-- Navbar menu -->
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <!-- Router links for the main navigation -->
                        <RouterLink to="/" class="navbar-item">Home</RouterLink>
                        <RouterLink to="/pesquisa" class="navbar-item">Página de Pesquisa de Categorias Ecológicas
                        </RouterLink>
                        <RouterLink to="/acaoecologica" class="navbar-item">Página de Ação Ecológica</RouterLink>
                        <RouterLink to="/PegadaCarbono" class="navbar-item">Página da Pegada de Carbono</RouterLink>
                        <RouterLink to="/Administração" class="navbar-item">Página de Administração</RouterLink>
                    </div>
                    <div class="navbar-end">
                        <!-- Router link for login/logout -->
                        <RouterLink v-if="!userId" to="/login" class="navbar-item">Login</RouterLink>
                        <div v-else class="navbar-item">Usuário ID: {{ userId }}</div>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Router view for rendering the component based on the current route -->
        <transition name="page-transition" mode="out-in" enter-active-class="page-enter-active"
            leave-active-class="page-leave-active" appear>
            <router-view></router-view>
        </transition>


    </div>
</template>
  
<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    components: {
        RouterLink,
        RouterView,
    },
    data() {
        return {
            userId: null, // Set the user ID here when logged in
        };
    },
}
</script>
  
<style scoped>
/* Bulma styles */
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

/* Custom styles */


/* Styles for the page transition animation */
.page-transition-enter-active,
.page-transition-leave-active {
    transition: opacity 0.5s ease;
}

.page-transition-enter,
.page-transition-leave-to {
    opacity: 0;
}

/* Custom page transition animation styles */
.page-enter-active {
    animation: page-enter-animation 0.5s ease;
}

.page-leave-active {
    animation: page-leave-animation 0.5s ease;
}

@keyframes page-enter-animation {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes page-leave-animation {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}</style>
  