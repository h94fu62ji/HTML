<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../../store/Store'
import PopWindow from '../../components/PopWindow.vue'
export default {
    data() {
        return {
            popwindow: false,
        }
    },

    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['user','labelArea','label','input','dataList'])
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore, ['setName','switchPop']),
        switchPop(){
            this.popwindow = !this.popwindow
        }
    },
    mutations:{

    },
    components: { PopWindow }
}
</script>
<template>
    <div class="w-full color3">
        <h1>基本資料</h1>
        
        <div :class="label">
            <div :class="labelArea">
                <label for="">工號</label>
            </div>
            <input v-model="user.ID" type="text" :class="input" disabled="disabled" class="cursor-not-allowed bg-slate-100">
            <!-- disabled="disabled" 禁止複製編輯 -->
            <!-- readonly="readonly" 可複製不可編輯-->
            <!-- cursor-not-allowed 游標:禁止 -->
        </div>
        
        <div :class="label">
            <div :class="labelArea">
                <label for="">登入密碼</label>
            </div>
            <input  v-model="user.PASSWORD" type="text" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">單位</label>
            </div>
            <select v-model="user.UNIT" :class="input" >
                <option value="501">製造組501</option>
                <option value="502">生產組502</option>
                <option value="503">出貨組503</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">姓名</label>
            </div>
            <input v-model="user.data.name" type="text" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">信箱</label>
            </div>
            <input v-model="user.data.email" type="text" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">權限</label>
            </div>
            <select v-model="user.LEVEL" :class="input">
                <option value="10">員工</option>
                <option value="20">全才</option>
                <option value="30">領班</option>
                <option value="40">區管</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">生日</label>
            </div>
            <input v-model="user.data.born" type="date" :class="input">
        </div>
        
        <div :class="label">
            <div :class="labelArea">
                <label for="">狀態</label>
            </div>
            <select v-model="user.data.working" :class="input">
                <option value='true'>在職</option>
                <option value='false'>停職</option>
                <option value='false'>離職</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">到職日</label>
            </div>
            <input v-model="user.data.in" type="date" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">離職日</label>
            </div>
            <input type="date" :class="input">
        </div>

        <button @click="switchPop(),setName(user.data.name)" type="button" class="color2 btn">確定更改</button>
    </div>

    <PopWindow v-if="popwindow" @push="switchPop" :title="'儲存成功'" />
</template>
<style>
    
</style>