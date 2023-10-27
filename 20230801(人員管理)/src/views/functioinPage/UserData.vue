<script>
import moment from 'moment'

import { mapActions, mapState } from 'pinia'
import indexStore from '../../store/Store'
import TableBar from '../../components/TableBar.vue'
export default {
    components: {
        TableBar
    },
    data() {
        return {
            // moment().format('YYYY/MM/DD hh:mm:ss'),
            workDate: moment().format('YYYY-MM'),
            wrokCheck: ['date', 'inTime', 'outTime', 'workTime'],
            wrokCheckName: { date: '日期', inTime: '簽到時間', outTime: '簽退時間', workTime: '工作時間' },
            wrokCheckData: [],
            // wrokCheck2: {
            //     date: '日期', check_in: '簽到', check_out: '簽退', work_time: '出勤時數'
            // },
            dataTitle2: ['本薪', '加班費', '餐費', '獎金', '總金額'],
            dataText2: [
                {
                }
            ],
        }
    },
    beforeMount() {
        this.getCheckLog()
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['URL', 'user', 'userName', 'labelArea', 'label', 'input', 'dataList'])
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore, ['setName']),
        getCheckLog() {
            fetch(this.URL + `get_check_log/${this.workDate}`, {
                credentials: 'include',
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    // console.log(data)
                    this.wrokCheckData = data.checkLog
                    // if (data.code == "200" || data.mesg == "data existed") {
                    //     this.errorText = false
                    //     this.text = "操作成功"
                    //     this.switchPop()
                    //     return
                    // }
                    // this.errorText = true
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },
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
                <input type="month" :class="input" v-model="workDate" @change="getCheckLog">
            </div>

            <TableBar :title="wrokCheck" :text="wrokCheckData" :titleName="wrokCheckName" />

        </div>

        <div>
            <h1>薪資</h1>

            <div :class="label">
                <div :class="labelArea">
                    <label for="">月份</label>
                </div>
                <input type="month" :class="input">

            </div>

            <!-- <TableBar :title="dataTitle2" /> -->
        </div>

    </div>
</template>
<style></style>