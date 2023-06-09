import { createRouter, createWebHistory } from 'vue-router'
import CabulasView from '@/views/CabulasView.vue'
import StatsView from '@/views/StatsView.vue'
import EditCabulasView from '@/views/EditCabulasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'apontamentos',
      component: CabulasView
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    },
    {
      path: '/editApontamento/:id',
      name: 'edit-apontamento',
      component: EditCabulasView
    }
  ]
})

export default router
