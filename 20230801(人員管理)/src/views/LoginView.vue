<script>
import { mapActions, mapState } from 'pinia'
import indexStore from '../store/Store'
export default {
    data() {
        return {
            // data
            id: null,
            pwd: null,
            // 提示
            idError: false,
            pwdError: false,
            pwdNull: false,
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['login', 'URL']),
    },

    methods: {
        // 返回上一頁
        // goBack() {
        //     //  數字 -1 代表返回上一步
        //     return this.$router.go(-1);
        // },

        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore, ['switchPop', 'switchToLogin']),

        loginCheck() { // 新增資料API
            const data = {
                "id": this.id,
                "pwd": this.pwd,
            }
            // console.log(addData)
            fetch(this.URL + "login_check", {
                method: "POST", // 請求型態
                headers: { // 必要文件
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                // 轉成JSON
                body: JSON.stringify(data) // 要傳送的資料
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                }) // 回傳資料轉成可讀取
                .then(data => {
                    console.log(data)
                    if (data.code == "200") {
                        this.switchToLogin()
                        this.toFunction()
                        this.switchPop()
                    } else {
                        this.pwdError = true
                    }
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },
        toFunction() {
            this.$router.push("/function")
        },
        checkText() {
            if (this.id == null || this.id == "" || this.id.length != 8 || this.pwd == null || this.pwd == "") {
                if (this.id == null || this.id == "" || this.id.length != 8) { this.idError = true } else { this.idError = false }
                if (this.pwd == null || this.pwd == "") { this.pwdNull = true } else { this.pwdNull = false }
            } else {
                this.idError = false
                this.pwdNull = false
                this.loginCheck()
            }
        },
    }
}

</script>


<template>
    <div class="all-area flex justify-center items-center">
        <div class="w-96 px-5 py-8 color3">

            <div class="my-3">
                <div class="flex items-center justify-between">
                    <label for="account" class="pl-2">工號</label>
                    <label v-if="idError" for="account" class="text-red-600 text-xs">輸入八位數數字</label>
                </div>
                <input type="text" id="account" class="w-full my-1 py-2 rounded-lg" v-model="id"
                    v-on:keyup.enter="checkText">
            </div>

            <div class="my-3">
                <div class="flex items-center justify-between">
                    <label for="pwd" class="pl-2">密碼</label>
                    <label v-if="pwdNull" for="pwd" class="text-red-600 text-xs">請輸入密碼</label>
                    <label v-if="pwdError" for="pwd" class="text-red-600 text-xs">工號或密碼錯誤</label>
                </div>
                <input type="password" id="pwd" class="w-full my-1 py-2 rounded-lg" v-model="pwd"
                    v-on:keyup.enter="checkText">
            </div>

            <router-link to="/function">
                <button type="button" class="color2 btn" @click="checkText">登
                    入</button>
            </router-link>

        </div>
    </div>
</template>


<style scoped>
.all-area {
    height: 90vh;
}
</style>