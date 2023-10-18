import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import indexStore from '../src/store/Store'


import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')


router.beforeEach((to, from, next) => {
    console.log("導航守衛啟動")
    if (to.meta.function) {  //to表示要進去的那頁
        fetch(indexStore().URL + "check_login",{
            credentials: 'include',
        })
            .then(res => res.json()) // 回傳資料轉成可讀取
            .then(data => {
                // console.log(data)
                if (data.code == "200") {
                    indexStore().switchToLogin()
                    next()
                } else {
                    indexStore().switchToLogout()
                    next("/login")
                }
            })
            .catch(error => {
                console.error("Error:", error)
            });
    } else next()
})

router.beforeEach((to, from, next) => {
    if (to.meta.login) {  //to表示要進去的那頁
        fetch(indexStore().URL + "check_login",{
            credentials: 'include',
        })
            .then(res => res.json()) // 回傳資料轉成可讀取
            .then(data => {
                // console.log(data)
                if (data.code == "403") {
                    indexStore().switchToLogout()
                    next()
                } else {
                    indexStore().switchToLogin()
                    next("/function")
                }
            })
            .catch(error => {
                console.error("Error:", error)
            });
    } else next()
})

