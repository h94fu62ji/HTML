// 路由表
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 網址:首頁
      path: '/',
      // 名稱:home
      name: 'home',
      // 元件:HomeViel
      component: HomeView
    },
    {
      path: '/V-text',
      name: 'Vtext',
      component: () => import("../views/Vtext.vue")
    },

  ]
})

export default router
