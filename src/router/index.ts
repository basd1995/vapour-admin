import type { Router } from 'vue-router'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const publicRoutes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/pages/login/index.vue'),
  },
]

const router: Router = createRouter({
  history:
    process.env.NODE_ENV === 'production'
      ? createWebHistory()
      : createWebHashHistory(),
  routes: publicRoutes,
})

export default router
