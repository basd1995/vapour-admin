import type { Router } from 'vue-router'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import PageLayout from '~/layout/page-layout.vue'

const publicRoutes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/views/login/index.vue'),
  },
  {
    path: '/app',
    component: PageLayout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('~/views/dashboard/index.vue'),
        meta: {
          locale: 'menu.dashboard',
          requiresAuth: true,
          icon: 'icon-dashboard',
        },
      },
    ],
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
