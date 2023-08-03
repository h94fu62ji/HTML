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
          component: () => import('../views/functioinPage/UserHome.vue')
        },
        {
          path: 'userset',
          component: () => import('../views/functioinPage/UserSet.vue')
        },
        {
          path: 'userleave',
          component: () => import('../views/functioinPage/UserLeave.vue')
        },
        {
          path: 'userdata',
          component: () => import('../views/functioinPage/UserData.vue')
        },
        {
          path: 'staffapprove',
          component: () => import('../views/functioinPage/StaffApprove.vue')
        },
        {
          path: 'staffadd',
          component: () => import('../views/functioinPage/StaffAdd.vue')
        },
        {
          path: 'staffset',
          component: () => import('../views/functioinPage/StaffSet.vue')
        },
        {
          path: 'staffmoney',
          component: () => import('../views/functioinPage/StaffMoney.vue')
        },
      ]
    },
  ]
})

export default router
