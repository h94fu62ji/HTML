<script>
import { mapActions, mapState } from 'pinia'
import indexStore from '../../store/Store'
import PopWindow from '../../components/PopWindow.vue'
export default {
    components: { PopWindow },
    data() {
        return {
            popwindow: false,
            userData: {},
            // 彈窗
            text: "",

            // 資料
            oldPwd: null,
            newPwd: null,
            checkPwd: null,
            // 紅框
            oldPwdStyle: null,
            newPwdStyle: null,
            checkPwdStyle: null,
        }
    },
    mounted() {
        this.getData()
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['URL', 'labelArea', 'label', 'input', 'input2', 'dataList'])
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore, []),
        switchPop() {
            this.popwindow = !this.popwindow
        },
        openPop() {
            this.popwindow = true
        },
        getData() {
            fetch(this.URL + "find_by_id", {
                credentials: 'include',
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    // console.log(data)
                    if (data.code == "200") {
                        this.userData = data.userInfo
                    }
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },

        setPwd() {
            const pwd = {
                "oldPwd": this.oldPwd,
                "newPwd": this.newPwd
            }
            fetch(this.URL + "set_pwd", {
                method: "POST", // 請求型態
                headers: { // 必要文件
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                // 轉成JSON
                body: JSON.stringify(pwd) // 要傳送的資料
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    console.log(data)
                    if (data.code == "200") {
                        this.text = "修改成功"
                        this.openPop()
                        setTimeout(() => {
                            this.$router.push("/function/userset")
                        }, 2000);
                    } else {
                        this.text = "舊密碼錯誤"
                        this.openPop()
                    }
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },

        checkText() {
            if (this.oldPwd == null || this.oldPwd == "" || this.newPwd == null || this.newPwd == "" || this.checkPwd == null || this.checkPwd == "") {
                if (this.oldPwd == null || this.oldPwd == "") { this.oldPwdStyle = { 'borderColor': 'red' } } else { this.oldPwdStyle = null }
                if (this.newPwd == null || this.newPwd == "") { this.newPwdStyle = { 'borderColor': 'red' } } else { this.newPwdStyle = null }
                if (this.checkPwd == null || this.checkPwd == "") { this.checkPwdStyle = { 'borderColor': 'red' } } else { this.checkPwdStyle = null }
            } else if (this.oldPwd == this.newPwd) {
                this.text = "舊密碼與新密碼相同"; this.openPop()
            } else if (this.newPwd != this.checkPwd) {
                this.text = "密碼確認錯誤"; this.openPop()
            } else {
                this.setPwd()
            }
        }
    }
}
</script>
<template>
    <div class="w-full color3">
        <h1>修改密碼</h1>

        <div :class="label">
            <div :class="labelArea">
                <label for="">工號</label>
            </div>
            <input v-model="userData.id" type="text" :class="input2" disabled="disabled" class="bg-slate-100">
            <!-- disabled="disabled" 禁止複製編輯 -->
            <!-- readonly="readonly" 可複製不可編輯-->
            <!-- cursor-not-allowed 游標:禁止 -->
        </div>


        <div :class="label">
            <div :class="labelArea">
                <label for="">舊密碼</label>
            </div>
            <input v-model="oldPwd" type="text" :class="input2" :style="oldPwdStyle">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">新密碼</label>
            </div>
            <input v-model="newPwd" type="password" :class="input2" :style="newPwdStyle">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">確認密碼</label>
            </div>
            <input v-model="checkPwd" type="password" :class="input2" :style="checkPwdStyle">
        </div>


        <button @click="checkText" type="button" class="color2 btn">確定更改</button>
    </div>

    <PopWindow v-if="popwindow" @push="switchPop" :title="text" />
</template>
<style></style>