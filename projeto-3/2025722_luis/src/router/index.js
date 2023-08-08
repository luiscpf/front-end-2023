// Import the required functions from the vue-router library
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CarbonView from '@/views/CarbonView.vue'
import ActionView from '@/views/ActionView.vue'
import SearchView from '@/views/SearchView.vue'
import AdminView from '@/views/AdminView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import ErrorView from '@/views/ErrorView.vue'
import firebase from 'firebase/app';
import 'firebase/auth';


// Função para verificar se o usuário está autenticado
function requireAuth(to, from, next) {
  const user = firebase.auth().currentUser;
  if (user) {
    // O usuário está autenticado, permita o acesso à rota
    next();
  } else {
    // O usuário não está autenticado, redirecione para a página de login
    next('/regist');
  }
}

// Create a router instance

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/action',
      name: 'ActionView',
      component: ActionView,
      beforeEnter: requireAuth 
    

    },
    {
      path: '/carbon',
      name: 'CarbonView',
      component: CarbonView ,
      beforeEnter: requireAuth 
    
    },
    {
      path: '/regist',
      name: 'RegistrationView',
      component: RegistrationView
    },
    {
      path: '/admin',
      name: 'AdminView',
      component: AdminView,
      beforeEnter: requireAuth 
   
    },
    {
      path: '/search',
      name: 'SearchView',
      component: SearchView,
      beforeEnter: requireAuth 
     
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView
    },
    //Catch-all route for undefined routes
    {
      path: '/:catchAll(.*)', // Matches any undefined route
      redirect: '/error' // Redirect to the error page component
    }
   
  ]
})
// Export the router instance
export default router
