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
            dataTitle1: ['日期','上班時間','下班時間','出勤時數'],
            dataText1: [
                {
                }
            ],
            dataTitle2: ['本薪','加班費','餐費','獎金','總金額'],
            dataText2: [
                {
                }
            ],
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

            <TableBar :title="dataTitle1"/>

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
            
            <TableBar :title="dataTitle2"/>
        </div>
        
    </div>
</template>
<style>
    
</style>