<script>
export default {
    
}
</script>


<template>
    <div class="w-40 py-4 px-8 bg-sky-200 rounded-xl">
        <router-link to="/function" class="link">基本設定</router-link>
        <router-link to="/function/leave" class="link">請假申請</router-link>
        <router-link to="/function/data" class="link">資料查詢</router-link>
    </div>
</template>


<style scoped>
.link{
    display: block;
    padding: 5px 0;
}
</style>