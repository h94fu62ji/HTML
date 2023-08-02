<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../../store/Store'
export default {
    data() {
        return {
            nameset : "",
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore , ['user','userName']),
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore , ['setName'])
    },
}
</script>
<template>
    <div class="w-full color3">
        <h1 class="text-2xl">歡迎 {{ userName }} 工號 {{ user.ID }}</h1>
        <input type="text" v-model="nameset">
        <button type="button" @click="setName(nameset)">更換姓名</button>
    </div>
</template>
<style>
    
</style>