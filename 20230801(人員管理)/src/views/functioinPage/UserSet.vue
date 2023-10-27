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

        getData() {
            fetch(this.URL + "find_by_id", {
                credentials: 'include',
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    console.log(data)
                    if (data.code == "200") {
                        this.userData = data.userInfo
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
        <h1>基本資料</h1>

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
                <label for="">密碼</label>
            </div>
            <router-link to="/function/setpwd" :class="input"
                class="h-10 bg-white border border-gray-500 hover:bg-gray-500 hover:transition-all hover:text-white cursor-pointer flex justify-center items-center pr-7">
                <p>變更密碼</p>
            </router-link>

        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">單位</label>
            </div>
            <select v-model="userData.dept" :class="input">
                <!-- <option value="IT">工程部</option> -->
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
            <input v-model="userData.name" type="text" :class="input2">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">信箱</label>
            </div>
            <input v-model="userData.email" type="text" :class="input2">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">權限</label>
            </div>
            <select v-model="userData.level" :class="input">
                <option value="2">主管</option>
                <option value="3">員工</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">生日</label>
            </div>
            <input v-model="userData.birthday" type="date" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">狀態</label>
            </div>
            <select v-model="userData.action" :class="input">
                <option :value=true>啟用</option>
                <option :value=false>停用</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">到職日</label>
            </div>
            <input v-model="userData.arriveDate" type="date" :class="input">
        </div>

        <div :class="label" v-if="userData.resignDate != null">
            <div :class="labelArea">
                <label for="">離職日</label>
            </div>
            <input v-model="userData.resignDate" type="date" :class="input">
        </div>

        <!-- <button @click="switchPop()" type="button" class="color2 btn">確定更改</button> -->
    </div>

    <PopWindow v-if="popwindow" @push="switchPop" :title="'儲存成功'" />
</template>
<style></style>