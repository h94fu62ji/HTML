<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../store/Store'
export default {
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['login']),
    },

    methods:{
        // 返回上一頁
        // goBack() {
        //     //  數字 -1 代表返回上一步
        //     return this.$router.go(-1);
        // },

        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore , ['switchPop','switchLogin']),

        jumpPage() {
            if (this.login == true) {
                this.$router.push("/function")
            }
            
        },
    },
    created() {
        this.jumpPage()
    },
}

</script>


<template>
    <div class="all-area flex justify-center items-center">
        <div class="w-96 px-5 py-8 color3">
            
            <div class="my-3">
                <div class="flex items-center justify-between">
                    <label for="id">請輸入工號</label>
                    <label for="id" class="text-red-600 text-xs">查無工號</label>
                </div>
                <input type="email" id="id" class="w-full my-1 py-2 rounded-lg">
            </div>

            <div class="my-3">
                <div class="flex items-center justify-between">
                    <label for="id">請輸入密碼</label>
                    <label for="id" class="text-red-600 text-xs">密碼錯誤</label>
                </div>
                <input type="email" id="id" class="w-full my-1 py-2 rounded-lg">
            </div>
            
            <router-link to="/function">
                <button type="button" class="color2 btn" @click="switchPop(),switchLogin()">登 入</button>
            </router-link>
            
        </div>
    </div>
</template>


<style scoped>
.all-area{
    height: 90vh;
}
</style>