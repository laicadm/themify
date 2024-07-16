import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreezyView from '@/views/BreezyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // theme: breezy
    {
      path: '/breezy',
      name: 'breezy',
      component: BreezyView
    },
    {
      path: '/breezy/buttons',
      name: 'breezy-buttons',
      component: () => import('../views/BreezyView.vue')
    },
    {
      path: '/breezy/fields',
      name: 'breezy-fields',
      component: () => import('../views/BreezyView.vue')
    },
    {
      path: '/breezy/forms',
      name: 'breezy-forms',
      component: () => import('../views/BreezyView.vue')
    },
    {
      path: '/breezy/tables',
      name: 'breezy-tables',
      component: () => import('../views/BreezyView.vue')
    }
  ]
})

export default router
