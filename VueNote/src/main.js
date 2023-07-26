import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// const app = createApp(App)
// const pinia = createPinia()

// // Vue 套用 router 資料
// app.use(router)
// // 套用 pinia
// app.use(pinia)
// app.mount('#app')

createApp(App).use(router).use(createPinia()).mount("#app")