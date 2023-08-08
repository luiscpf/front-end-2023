// Import the required functions from the vue-router library
import { createRouter, createWebHistory } from 'vue-router'


// Create a router instance
const router = createRouter({
  // Set the router history mode to use web history
  history: createWebHistory(import.meta.env.BASE_URL),

  // Define the routes for the application
  routes: [
    
    {path: '/pesquisa', name: 'pesquisa', component: () => import('../views/pesquisa.vue')},
    {path: '/acaoecologica',name: 'acaoecologica', component: () => import('../views/acaoecologica.vue')},
    {path: '/login',name: 'login',component: () => import('../views/LoginViews.vue')},
    {path: '/Administração',name: 'Administração',component: () => import('../views/Administração.vue')},
    {path: '/PegadaCarbono',name: 'PegadaCarbono',component: () => import('../views/PegadaCarbono.vue')},
    {path: '/',name: 'LandingPage',component: () => import('../views/LandingPage.vue')},
    {path: '/error',name: 'ErrorPage',component: () => import('../views/ErrorPage.vue')},
    {path: '/:catchAll(.*)',redirect: '/error'} //if the path doesn't exist it will be redirected to the error page
  ]
})
// Export the router instance
export default router
