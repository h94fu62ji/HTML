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
      name: 'VIf&VShow',
      component: () => import("../views/VIf&VShow.vue")
    },
    {
      path: '/V-bind',
      name: 'VBind',
      component: () => import("../views/VBind.vue")
    },
    {
      path: '/V-on',
      name: 'VOn',
      component: () => import("../views/VOn.vue")
    },
    {
      path: '/Props',
      name: 'Props',
      component: () => import("../views/Props.vue")
    },
    {
      path: '/Emit',
      name: 'Emit',
      component: () => import("../views/Emit.vue")
    },
    {
      path: '/Provide&Inject',
      name: 'Provide&Inject',
      component: () => import("../views/Provide&Inject.vue")
    },
    {
      path: '/Watch&Computed',
      name: 'Watch&Computed',
      component: () => import("../views/WatchAndComputed.vue")
    },
    {
      path: '/Vue-router',
      name: 'VueRouter',
      component: () => import("../views/VueRouter.vue"),
      children:[
        {
        path : "com-c",
        component: () => import("../components/ComC.vue"),
        },
        {
        path : "com-d",
        component: () => import("../components/ComD.vue"),
        },
      ]
    },
    {
      path: '/Router-push',
      name: 'RouterPush',
      component: () => import("../views/RouterPush.vue")
    },
    {
      path: '/Router-props/:propText',
      name: 'RouterProps',
      component: () => import("../views/RouterProps.vue"),
      props:true,
    },
    {
      path: '/File-reader',
      name: 'FileReader',
      component: () => import("../views/FileReader.vue"),
    },

  ]
})

export default router
