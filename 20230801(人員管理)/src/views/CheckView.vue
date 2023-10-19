<script>
import moment from 'moment'
import { mapActions, mapState } from 'pinia'
import indexStore from '../store/Store'
import PopWindowVue from '../components/PopWindow.vue'
export default {
    components: {
        PopWindowVue
    },
    data() {
        return {
            userId: null,
            today: moment().format('YYYY/MM/DD hh:mm:ss'),
            success: false,
            errorText: false,
            text: null,
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['URL', 'input', 'timeNow'])
    },
    mounted() {
        this.getId()
        this.getTime()
    },
    methods: {
        switchPop() {
            this.success = !this.success
        },
        getTime() {
            setInterval(() => {
                this.today = moment().format('YYYY/MM/DD hh:mm:ss')
            }, 1000);
        },
        getId() {
            fetch(this.URL + "get_id", { credentials: 'include' })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    console.log(data)
                    if (data.code == "200") {
                        this.userId = data.userId
                    }
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },
        checkIn() {
            const data = {
                userId: this.userId,
            }
            fetch(this.URL + "check_in", {
                method: "POST", // 請求型態
                headers: { // 必要文件
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                // 轉成JSON
                body: JSON.stringify(data) // 要傳送的資料
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    console.log(data)
                    if (data.code == "200" || data.mesg == "data existed") {
                        this.errorText = false
                        this.text = "操作成功"
                        this.switchPop()
                        return
                    }
                    this.errorText = true
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },
        checkOut() {
            const data = {
                userId: this.userId,
            }
            fetch(this.URL + "check_out", {
                method: "POST", // 請求型態
                headers: { // 必要文件
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                // 轉成JSON
                body: JSON.stringify(data) // 要傳送的資料
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    console.log(data)
                    if (data.code == "200" || data.mesg == "data existed") {
                        this.errorText = false
                        this.text = "操作成功"
                        this.switchPop()
                        return
                    }
                    this.errorText = true
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },
    },
}
</script>


<template>
    <div class="all-area flex justify-center items-center">
        <div class="w-96 px-5 py-8 color3">
            <div class="my-2">
                <div class="flex items-center justify-between">
                    <label for="id">請輸入工號</label>
                    <label v-if="errorText" for="id" class="text-red-500">工號輸入錯誤</label>
                </div>
                <input type="email" id="id" class="w-full my-1 py-2 rounded-lg" v-model="userId">
            </div>
            <h1 class="text-center">{{ "現在時間 " + today }}</h1>
            <div class="flex mt-4">
                <button type="button" class="color2 btn" @click="checkIn">簽 到</button>
                <button type="button" class="color2 btn" @click="checkOut">簽 退</button>
            </div>

        </div>
    </div>
    <PopWindowVue v-if="success" @push="switchPop" :title="text" />
</template>


<style scoped>
.all-area {
    height: 90vh;
}
</style>