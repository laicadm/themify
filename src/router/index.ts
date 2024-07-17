import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BreezyView from '@/views/dashboards/BreezyView.vue'
import PastureView from '@/views/dashboards/PastureView.vue'
import AutumnSkyView from '@/views/dashboards/AutumnSkyView.vue'
import MacaroonsView from '@/views/dashboards/MacaroonsView.vue'
import MonotoneView from '@/views/dashboards/MonotoneView.vue'

const subPaths = ['buttons', 'fields', 'forms', 'tables'];

// breezy routes
const breezyRoutes = subPaths.map(subPath => ({
  path: `/breezy/${subPath}`,
  name: `breezy-${subPath}`,
  component: () => import('../views/dashboards/BreezyView.vue')
}));

// pasture routes
const pastureRoutes = subPaths.map(subPath => ({
  path: `/pasture/${subPath}`,
  name: `pasture-${subPath}`,
  component: () => import('../views/dashboards/PastureView.vue')
}));

// autumn sky routes
const autumnSkyRoutes = subPaths.map(subPath => ({
  path: `/autumnsky/${subPath}`,
  name: `autumnsky-${subPath}`,
  component: () => import('../views/dashboards/AutumnSkyView.vue')
}));

// macaroons routes
const macaroonsRoutes = subPaths.map(subPath => ({
  path: `/macaroons/${subPath}`,
  name: `macaroons-${subPath}`,
  component: () => import('../views/dashboards/MacaroonsView.vue')
}));

// monotone routes
const monotoneRoutes = subPaths.map(subPath => ({
  path: `/monotone/${subPath}`,
  name: `monotone-${subPath}`,
  component: () => import('../views/dashboards/MonotoneView.vue')
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
  ...autumnSkyRoutes,
  // macaroons
  {
    path: '/macaroons',
    name: 'macaroons',
    component: MacaroonsView
  },
  ...macaroonsRoutes,
  // monotone
  {
    path: '/monotone',
    name: 'monotone',
    component: MonotoneView
  },
  ...monotoneRoutes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
