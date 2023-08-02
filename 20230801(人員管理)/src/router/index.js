import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/check',
      name: 'check',
      component: () => import('../views/CheckView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/function',
      name: 'function',
      component: () => import('../views/FunctionView.vue'),
      children : [
        {
          path: '',
          component: () => import('../views/functioinPage/Home.vue')
        },
        {
          path: 'leave',
          component: () => import('../views/functioinPage/Leave.vue')
        },
        {
          path: 'data',
          component: () => import('../views/functioinPage/Data.vue')
        },
      ]
    },
  ]
})

export default router
