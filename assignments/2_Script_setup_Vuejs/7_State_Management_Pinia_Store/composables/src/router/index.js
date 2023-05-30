import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue')
    },
    {
      path: '/postdetails',
      name: 'postdetails',
      component: () => import('../views/postDetailsView.vue')
    },
    {
      path: '/postdetails/:id',
      name: 'post',
      component: () => import('../views/postView.vue')
    }

  ]
})

export default router
