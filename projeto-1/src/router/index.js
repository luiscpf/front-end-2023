import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ReviewsView from '@/views/ReviewsView.vue'
import EditReviewView from '@/views/EditReviewView.vue'
import CocktailSearchView from '@/views/CocktailSearchView.vue'
import CocktailView from '@/views/CocktailView.vue'
import TicketsCartView from '@/views/TicketsCartView.vue'
import ErrorPageView from '@/views/ErrorPageView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsView

    },
    {
      path: '/editReview/:id',
      name: 'edit-review',
      component: EditReviewView
    },
    {
      path: '/log',
      name: 'log-in',
      component: LoginView 
    },
    {
      path: '/sign',
      name: 'sign-up',
      component: SignupView 
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketsCartView 
    },
    {
      path: '/cocktail',
      name: 'cocktail-individual',
      component: CocktailView
    },
    {
      path: '/cocktails',
      name: 'cocktail-search',
      component: CocktailSearchView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
      meta:{
        requiresAuth: true,

      }
      
    },

    {
      path: '/error',
      name: 'error',
      component: ErrorPageView
    },
    //Catch-all route for undefined routes
    {
      path: '/:catchAll(.*)', // Matches any undefined route
      redirect: '/error' // Redirect to the error page component
    }
   
  ]
})

const getCurrentuser = () => {
  return new Promise((resolve, reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) =>{
        removeListener();
        resolve(user);
      }
    )
  })
}
router.beforeEach(async(to, from, next)=>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){
    if(await getCurrentuser()){
      next();
    }else{
      alert("you dont have acess!");
      next('/');

  }

  }else{
    next();
  }
})

export default router
