<script>
// pinia 方法
import { mapActions } from 'pinia'
// 自訂 pinia 資料庫
import indexStatus from '../store/indexStatus';
export default{
    data(){
        return{
            text: "Hello everymeow!!!",
            isTrue : false
        }
    },
    methods:{
        ...mapActions(indexStatus,['setLocation'])
    },
    mounted() {
        this.setLocation(2)
    },
    
}

</script>
    


<template>
    <h1>V-text</h1>
    <!-- 純值 / 能接受一個表達式 -->
    <!-- 如果 isTrue 為真 我想要p顯示 text 的內容 -->
    <!-- 如果 isTrue 為假 我想要p顯示 loading -->
    <p>{{ isTrue ? text : "loading.." }}</p>
    <p v-text="text"></p>

</template>
    


<style>
    
</style>