<script>
import { mapActions, mapState } from 'pinia'
import indexStore from '../../store/Store'
import TableBar from '../../components/TableBar.vue'
import PopWindow from '../../components/PopWindow.vue'
import moment from 'moment'
export default {
    components: {
        TableBar,
        PopWindow,
    },
    data() {
        return {
            dataTitle: ['type', 'start', 'end', 'review'],
            dataTitleName: {
                type: '假別', start: '開始日期', end: '結束日期', review
                    : '批准狀態'
            },
            dataLeaveList: {},
            leaveType: 1,
            timeStartDate: moment().format("YYYY-MM-DD"),
            timeStartHour: "09",
            timeStartMinute: "00",
            timeEndDate: moment().format("YYYY-MM-DD"),
            timeEndHour: "18",
            timeEndMinute: "00",
            reason: null,
            timeHour: ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
            timeMinute: ["00", "30"],
            popwindow: false,
            popWindowText: null,

        }
    },
    beforeMount() {
        this.getLeave()
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['URL', 'labelArea', 'label', 'input', 'input2', 'dataList'])
    },
    methods: {
        dd() {
            const x = this.timeStartDate + "T" + this.timeStartHour + ":" + this.timeStartMinute
            console.log(x)
        },

        addNewLeave() {
            const LeaveDate = {
                type: this.leaveType,
                startTime: this.timeStartDate + "T" + this.timeStartHour + ":" + this.timeStartMinute,
                endTime: this.timeEndDate + "T" + this.timeEndHour + ":" + this.timeEndMinute,
                reason: this.reason,
            }
            fetch(this.URL + "add_leave", {
                method: "POST", // 請求型態
                headers: { // 必要文件
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                // 轉成JSON
                body: JSON.stringify(LeaveDate) // 要傳送的資料
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    // console.log(data)
                    if (data.code == "200") {
                        this.popWindowText = '新增成功'
                        this.popwindow = true
                        this.getLeave()
                    }
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },
        getLeave() {
            fetch(this.URL + "get_leave", {
                credentials: 'include',
                // 轉成JSON
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    // console.log(data)
                    this.dataLeaveList = data.leaveApply
                    const typeList = ['公假', '事假', '病假', '特休', '喪假']
                    const reviewList = ['審核中', '主管審核通過', '審核通過', '審核失敗', '取消']
                    this.dataLeaveList.forEach(e => {
                        e.type = typeList[e.type - 1]
                        e.review = reviewList[e.review - 1]
                    });

                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },
    }
}
</script>
<template>
    <div class="w-full color3">
        <h1>請假申請</h1>

        <div :class="label">
            <div :class="labelArea">
                <label for="">假別</label>
            </div>
            <select name="" id="" :class="input" v-model="leaveType">
                <option :value="1">公假</option>
                <option :value="2">事假</option>
                <option :value="3">病假</option>
                <option :value="4">特休</option>
                <option :value="5">喪假</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">開始時間</label>
            </div>
            <div :class="input" class="flex" style="padding: 0;">

                <input type="date" class="w-1/2 mr-2 rounded-lg text-center" v-model="timeStartDate">

                <select class="w-1/4 mr-2" v-model="timeStartHour">
                    <option v-for="item in timeHour" :value="item">{{ item }}</option>
                </select>

                <select class="w-1/4" v-model="timeStartMinute">
                    <option v-for="item in timeMinute" :value="item">{{ item }}</option>
                </select>

            </div>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">結束時間</label>
            </div>
            <div :class="input" class="flex" style="padding: 0;">

                <input type="date" class="w-1/2 mr-2 rounded-lg text-center" v-model="timeEndDate">

                <select class="w-1/4 mr-2" v-model="timeEndHour">
                    <option v-for="item in timeHour" :value="item">{{ item }}</option>
                </select>

                <select class="w-1/4" v-model="timeEndMinute">
                    <option v-for="item in timeMinute" :value="item">{{ item }}</option>
                </select>

            </div>
        </div>
        <div :class="label">
            <div :class="labelArea">
                <label for="">原因</label>
            </div>
            <textarea :class="input" class="text-start h-24 break-all resize-none" v-model="reason"></textarea>
        </div>

        <button type="button" class="color2 btn" @click="addNewLeave">申 請</button>


        <TableBar :title="dataTitle" :titleName="dataTitleName" :text="dataLeaveList" />

        <PopWindow v-if="popwindow" :title="popWindowText" @push="popwindow = false" />
    </div>
</template>
<style></style>