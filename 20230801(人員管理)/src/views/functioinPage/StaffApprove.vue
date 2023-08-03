<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../../store/Store'
export default {
    data() {
        return {
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['dataList'])
    },
}
</script>
<template>
    <div class="w-full color3">
        <h1>假單批准</h1>
    
        <div class="h-52 color4 m-4 ">
            <div :class="dataList">
                <h1 style="width: 17%;">開始日期</h1>
                <h1 style="width: 20%;">丨結束日期</h1>
                <h1 style="width: 63%;">丨批准</h1>
            </div>
        </div>
    </div>

</template>
<style>
    
</style>