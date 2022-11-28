import type { RouteRecordRaw, Router } from 'vue-router'
import {
  createRouter,
  createWebHistory,
} from 'vue-router'

const publicRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('~/views/not-found/index.vue'),
  },
  {
    path: '/vapour',
    name: 'root',
    redirect: '/vapour/login',
    component: () => import('~/layout/VapLoginLayout/index.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('~/views/login/index.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('~/views/register/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('~/layout/page-layout.vue'),
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
  history: createWebHistory(),
  routes: publicRoutes as RouteRecordRaw[],
})

export default router
