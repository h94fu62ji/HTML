<script>
export default {
    
}
</script>


<template>
    <div class="all-area flex justify-center items-center">
        <div class="w-96 px-5 py-8 color3">
            
            <div class="my-3">
                <div class="flex items-center justify-between">
                    <label for="id">請輸入工號</label>
                    <label for="id">無此工號</label>
                </div>
                <input type="email" id="id" class="w-full border-2 my-1">
            </div>

            <div class="my-3">
                <div class="flex items-center justify-between">
                    <label for="id">請輸入密碼</label>
                    <label for="id">密碼錯誤</label>
                </div>
                <input type="email" id="id" class="w-full border-2 my-1">
            </div>
            
            <router-link to="/function" class="color2 text-white w-36 py-2 rounded-lg block mx-auto mt-5 text-center">登入</router-link>
            
        </div>
    </div>
</template>


<style scoped>
.all-area{
    height: 90vh;
}
</style>