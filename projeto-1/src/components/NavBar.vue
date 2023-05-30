<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation"> 
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div class="box has-shadow has-text-centered is-inline-block" style="width: 100px; height: 100px; padding: 0; margin: 0;">
                    <img :src="logo" alt="Logo" style="max-width: 100%; height: auto;" />
                </div>
            
                <a @click.prevent="$event=> showMobileNav = !showMobileNav" 
                    role="button" class="navbar-burger" :class="{'is-active': showMobileNav}"
                    aria-label="menu" aria-expanded="false" data-target="navbarBasic Example">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu"
                :class="{'is-active': showMobileNav}">
                <div class="navbar-end">

                    <RouterLink class="navbar-item" active-class="is-active" to="/">Home</RouterLink>
                    <RouterLink class="navbar-item" active-class="is-active" to="/tickets">Tickets</RouterLink>
                    <RouterLink class="navbar-item" active-class="is-active" to="/reviews">Reviews</RouterLink>
                    <RouterLink class="navbar-item" active-class="is-active" to="/cocktail">Cocktail</RouterLink>
                    <RouterLink class="navbar-item" active-class="is-active" to="/cocktails">Cocktails</RouterLink>
                    <div class="navbar-item" active-class="is-active">
                        <RouterLink class="button is-small button is-link" style="color: white !important;" to="/sign">
                            Sign Up
                        </RouterLink>
                    </div>
                    <div class="navbar-item" active-class="is-active">
                        <RouterLink class="button is-small button is-link" style="color: white !important;" to="/log">
                            Login
                        </RouterLink>
                    </div>
                    <div class="navbar-item" active-class="is-active" @click="handleSignOut" v-if="isLoggedIn">
                        Sign Out
                    </div>
                    <div class="navbar-item" active-class="is-active">
                        <RouterLink class="button is-small is-link" style="color: white !important;" to="/error">
                            404
                        </RouterLink>
                    </div>

                </div>
               
                <!-- <button class="button is-small is-warning mt-3 ml-3">Log Forms</button> -->
            </div>
        </div>
    </nav>
</template>

<script setup>

    import {onMounted, ref} from 'vue';
    import logo from '@/assets/logo.png'
    import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
    import router from '../router';

    const showMobileNav = ref(false);

    const isLoggedIn = ref(false);

    let auth;
    onMounted(()=>{
        auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            if(user){
                isLoggedIn.value= true;
            }else{
                isLoggedIn.value= false;
            }
        });

    });

    const handleSignOut = () => {
        signOut(auth).then(()=>{
            router.push("/")
        });
    }


</script>

<style scoped>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>
