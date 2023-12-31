import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: () => import('../views/SignUpPage.vue')
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue')
    },
  ]
})

export default router
