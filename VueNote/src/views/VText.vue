<script>
export default{
    data(){
        return{
            text: "Hello everymeow!!!",
            isTrue : false
        }
    }
    
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