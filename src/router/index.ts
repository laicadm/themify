import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BreezyView from '@/views/BreezyView.vue'
import PastureView from '@/views/PastureView.vue'
import AutumnSkyView from '@/views/AutumnSkyView.vue'

const subPaths = ['buttons', 'fields', 'forms', 'tables'];

// breezy routes
const breezyRoutes = subPaths.map(subPath => ({
  path: `/breezy/${subPath}`,
  name: `breezy-${subPath}`,
  component: () => import('../views/BreezyView.vue')
}));

// pasture routes
const pastureRoutes = subPaths.map(subPath => ({
  path: `/pasture/${subPath}`,
  name: `pasture-${subPath}`,
  component: () => import('../views/PastureView.vue')
}));

// autumn sky routes
const autumnSkyRoutes = subPaths.map(subPath => ({
  path: `/autumnsky/${subPath}`,
  name: `autumnsky-${subPath}`,
  component: () => import('../views/AutumnSkyView.vue')
}));

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // breezy
  {
    path: '/breezy',
    name: 'breezy',
    component: BreezyView
  },
  ...breezyRoutes,
  // pasture
  {
    path: '/pasture',
    name: 'pasture',
    component: PastureView
  },
  ...pastureRoutes,
  // autumnsky
  {
    path: '/autumnsky',
    name: 'autumnsky',
    component: AutumnSkyView
  },
  ...autumnSkyRoutes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
