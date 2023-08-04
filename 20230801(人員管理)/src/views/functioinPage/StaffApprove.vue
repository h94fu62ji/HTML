<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../../store/Store'
import TableBar from '../../components/TableBar.vue'
export default {
    components:{
        TableBar
    },
    data() {
        return {
            dataTitle: ['工號','姓名','開始日期','結束日期','批准狀態'],
            dataText: [
                {
                }
            ]
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

        <TableBar :title="dataTitle"/>

    </div>

</template>
<style>
    
</style>