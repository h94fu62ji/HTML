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
        ...mapState(indexStore , ['user','userName']),
    },
}
</script>
<template>
    <div class="w-full color3 mt-20">
        <h1 class="text-3xl p-10">歡迎 {{ userName }}</h1>
        <h1 class="text-3xl p-10">工號 {{ user.ID }}</h1>
    </div>
</template>
<style>
    
</style>