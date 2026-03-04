import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/home'),
  },
  {
    name: 'magazine',
    path: '/magazine',
    component: () => import('@/pages/magazine'),
  },
  {
    name: 'authors',
    path: '/authors',
    component: () => import('@/pages/authors'),
  },
  {
    name: 'podcast',
    path: '/podcast',
    component: () => import('@/pages/podcast'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
