// 路由表
import { createRouter, createWebHistory } from 'vue-router'
import VMoldeView from '../views/VMolde.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 網址:首頁
      path: '/',
      // 名稱:home
      name: 'VModel',
      // 元件:HomeViel
      component: VMoldeView
    },
    {
      path: '/V-text',
      name: 'VText',
      component: () => import("../views/VText.vue")
    },
    {
      path: '/V-for',
      name: 'VFor',
      component: () => import("../views/VFor.vue")
    },
    {
      path: '/V-if&V-show',
      name: 'VIfAndVShow',
      component: () => import("../views/VIfAndVShow.vue")
    },
    {
      path: '/V-bind',
      name: 'VBind',
      component: () => import("../views/VBind.vue")
    },

  ]
})

export default router
