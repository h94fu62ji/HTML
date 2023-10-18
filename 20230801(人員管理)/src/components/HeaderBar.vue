<script>
import { mapActions, mapState } from 'pinia'
import indexStore from '../store/Store'
export default {
    data() {
        return {

        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['login', 'URL']),
    },
    methods: {
        ...mapActions(indexStore, ['switchToLogout']),

        jumpPage() {
            this.$router.push("/")
        },
        logout() {
            fetch(this.URL + "logout", {
                credentials: 'include',
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    // console.log(data)
                    if (data.code == "200") {
                        this.jumpPage()
                        this.switchToLogout()
                    }
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        }
    }
}
</script>


<template>
    <div class="fixed top-0 right-0 z-10">
        <div class="h-14 w-screen color1 shadow-xl">
            <div class="h-14 all-area flex justify-between items-center">
                <div class="flex items-end">
                    <router-link to="/" class="text-2xl select-none">APEX股份有限公司</router-link>
                    <p class="text-xs select-none pl-2">人員系統</p>
                </div>
                <div class="flex items-end">
                    <router-link to="/login" class="text-xl select-none">會員中心</router-link>
                    <!-- v-if="login"  -->
                    <button type="button" v-if="login" class="text-xl pl-6  select-none" @click="logout()">登出</button>

                    <router-link to="/check" class="text-xl pl-6 select-none">簽到</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>