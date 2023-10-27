<script>
import { mapActions, mapState } from 'pinia'
import indexStore from '../../store/Store'
import PopWindow from '../../components/PopWindow.vue'
import moment from "moment/moment";

export default {
    components: { PopWindow },
    data() {
        return {
            //彈跳視窗
            popwindow: false,
            poptext: null,
            // 資料
            id: null,
            dept: null,
            name: null,
            pwd: null,
            email: null,
            level: null,
            birthday: null,
            arriveDate: moment().format('YYYY-MM-DD'),
            action: null,
            // 顏色
            deptStyle: null,
            nameStyle: null,
            pwdStyle: null,
            emailStyle: null,
            levelStyle: null,
            birthdayStyle: null,
            actionStyle: null,
        }
    },
    mounted() {
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['user', 'labelArea', 'label', 'input', 'input2', 'dataList', 'URL'])
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore, ['setName']),
        switchPop() {
            this.popwindow = !this.popwindow
        },
        checkData() { // 確認欄位填寫
            if (this.dept === null || this.name === null || this.pwd === null || this.email === null || this.level === null || this.birthday === null || this.action === null || this.dept == "" || this.name == "" || this.pwd == "" || this.email == "" || this.level == "" || this.birthday == "" || this.action == "") {
                // style
                if (this.dept === null || this.dept == "") { this.deptStyle = { 'borderColor': 'red' } } else { this.deptStyle = null }
                if (this.name === null || this.name == "") { this.nameStyle = { 'borderColor': 'red' } } else { this.nameStyle = null }
                if (this.pwd === null || this.pwd == "") { this.pwdStyle = { 'borderColor': 'red' } } else { this.pwdStyle = null }
                if (this.email === null || this.email == "") { this.emailStyle = { 'borderColor': 'red' } } else { this.emailStyle = null }
                if (this.level === null || this.level == "") { this.levelStyle = { 'borderColor': 'red' } } else { this.levelStyle = null }
                if (this.birthday === null || this.birthday == "") { this.birthdayStyle = { 'borderColor': 'red' } } else { this.birthdayStyle = null }
                if (this.action === null || this.action == "") { this.actionStyle = { 'borderColor': 'red' } } else { this.actionStyle = null }
                this.poptext = "資料不齊全"
                this.switchPop()
            } else {
                this.addInfo()
            }
        },
        clearField() { // 清空欄位
            // data
            this.dept = null
            this.name = null
            this.pwd = null
            this.email = null
            this.level = null
            this.birthday = null
            this.arriveDate = moment().format('YYYY-MM-DD')
            this.action = null
        },
        clearStyle() {
            // style red
            this.deptStyle = null
            this.nameStyle = null
            this.pwdStyle = null
            this.emailStyle = null
            this.levelStyle = null
            this.birthdayStyle = null
            this.actionStyle = null
        },
        addInfo() { // 新增資料API
            const addData = {
                "dept": this.dept,
                "name": this.name,
                "pwd": this.pwd,
                "email": this.email,
                "level": this.level,
                "birthday": this.birthday,
                "arriveDate": this.arriveDate,
                "action": this.action,
            }
            // console.log(addData)
            fetch(this.URL + "add_info", {
                method: "POST", // 請求型態
                headers: { // 必要文件
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                // 轉成JSON
                body: JSON.stringify(addData) // 要傳送的資料
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    console.log(data)
                    if (data.code == "403") {
                        this.$router.push("/")
                    }
                    if (data.code == "200") {
                        this.id = data.id
                        // mesg
                        this.poptext = "新增成功"
                        // pop
                        this.switchPop()
                    } else {
                        // mesg
                        this.poptext = "系統錯誤"
                        // pop
                        this.switchPop()

                    }
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
        <h1>新增成員</h1>

        <div :class="label">
            <div :class="labelArea">
                <label for="">預設工號</label>
            </div>
            <input type="text" :class="input2" disabled="disabled" class="cursor-not-allowed bg-slate-100" v-model="id">
        </div>


        <div :class="label">
            <div :class="labelArea">
                <label for="">選擇單位</label>
            </div>
            <select name="" id="" :class="input" v-model="dept" :style="deptStyle">
                <option value="A01">生產部A01</option>
                <option value="A02">生產部A02</option>
                <option value="P01">倉管部P01</option>
                <option value="D01">工程部D01</option>
                <option value="HR">人資部</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">姓名</label>
            </div>
            <input type="text" :class="input2" v-model="name" :style="nameStyle">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">登入密碼</label>
            </div>
            <input type="text" :class="input2" v-model="pwd" :style="pwdStyle">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">信箱</label>
            </div>
            <input type="text" :class="input2" v-model="email" :style="emailStyle">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">權限</label>
            </div>
            <select name="" id="" :class="input" v-model="level" :style="levelStyle">
                <option :value="2">主管</option>
                <option :value="3">員工</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">生日</label>
            </div>
            <input type="date" :class="input" v-model="birthday" :style="birthdayStyle">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">帳號啟用</label>
            </div>
            <select name="" id="" :class="input" v-model="action" :style="actionStyle">
                <option :value=true>啟用</option>
                <option :value=false>停用</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">到職日</label>
            </div>
            <input type="date" :class="input" v-model="arriveDate">
        </div>

        <div class="flex ml-20">
            <button type="button" class="color2 btn" @click="checkData">確定新增</button>
            <button type="button" class="color2 btn" @click="clearField(), clearStyle()">清空</button>
        </div>

    </div>

    <PopWindow v-if="popwindow" @push="switchPop" :title="poptext" />
</template>
<style></style>