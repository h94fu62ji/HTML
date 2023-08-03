<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../store/Store'
export default {
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['input','timeNow','today','getNewTime'])
    },
    methods: {
        gettime(){
            console.log(this.timeNow)
        }
    },
    created() {
        this.getNewTime()
    },
}
</script>


<template>
    
    <div class="all-area flex justify-center items-center">
        <div class="w-96 px-5 py-8 color3">
            <div class="my-2">
                <div class="flex items-center justify-between">
                    <label for="id">請輸入工號</label>
                    <label for="id">簽到成功✔️</label>
                </div>
                <input type="email" id="id" class="w-full my-1 py-2 rounded-lg">
            </div>
            <h1 class="text-center">{{ "現在時間 "+ today }}</h1>
            <div class="flex mt-4">
                <button type="button" class="color2 btn">簽 到</button>
                <button type="button" class="color2 btn" @click="gettime">簽 退</button>
            </div>

        </div>
    </div>
</template>


<style scoped>
.all-area{
    height: 90vh;
}
</style>