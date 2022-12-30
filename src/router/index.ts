import { createRouter, createWebHistory } from 'vue-router'
import layouts from '../components/layouts/layouts.vue'
import HomePage from '../components/pages/HomePage.vue'
import ShopPage from '../components/pages/ShopPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layouts,
      children:[
        {
          path:'/',
          name: 'home',
          component:HomePage
        },
        {
          path:'/shop',
          name: 'shop',
          component:ShopPage
        },
      ]
    },
  ]
})

export default router
