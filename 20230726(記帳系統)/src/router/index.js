import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: () => import('../views/SignUpPage.vue')
    },
  ]
})

export default router
