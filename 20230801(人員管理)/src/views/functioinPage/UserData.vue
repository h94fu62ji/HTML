<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../../store/Store'
export default {
    data() {
        return {
            labelArea : ['w-24','text-sb'],
            label : ['m-4','flex','items-center'],
            input : ['text-center','mx-4','w-full','py-2'],
            dataList : ['flex','items-center','justify-between'],
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['user','userName','labelArea','label','input','dataList'])
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore , ['setName'])
    },
}
</script>
<template>
    <div class="w-full color3">

        <div>
            <h1>出勤紀錄</h1>

            <div :class="label">
                <div :class="labelArea">
                    <label for="">月份</label>
                </div>
                <select :class="input">
                    <option value="9">9月</option>
                </select>
            </div>

            <div class="h-52 color4 m-4 ">
                <div :class="dataList">
                    <h1 style="width: 17%;">日期</h1>
                    <h1 style="width: 20%;">丨上班時間</h1>
                    <h1 style="width: 20%;">丨下班時間</h1>
                    <h1 style="width: 20%;">丨出勤時數</h1>
                    <h1 style="width: 23%;">丨加班時數</h1>
                </div>
            </div>
        </div>

        <div>
            <h1>薪資</h1>

            <div :class="label">
                <div :class="labelArea">
                    <label for="">月份</label>
                </div>
                <select :class="input">
                    <option value="9">9月</option>
                </select>
            </div>
            
            <div class="h-52 color4 m-4 ">
                <div :class="dataList">
                    <h1 style="width: 17%;">本薪</h1>
                    <h1 style="width: 20%;">丨加班費</h1>
                    <h1 style="width: 20%;">丨餐費</h1>
                    <h1 style="width: 20%;">丨獎金</h1>
                    <h1 style="width: 23%;">丨總金額</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    
</style>