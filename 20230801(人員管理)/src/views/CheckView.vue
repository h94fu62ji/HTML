<script>
export default {
    
}
</script>


<template>
    <div class="area flex justify-center items-center">
        <div class="w-96 px-5 py-8 bg-slate-300">
            <div class="my-2">
                <div class="flex items-center justify-between">
                    <label for="id">請輸入工號</label>
                    <label for="id">簽到成功✔️</label>
                </div>
                <input type="email" id="id" class="w-full border-2 my-1">
            </div>
            <h1 class="text-center">現在時間 2023/08/01 08:55:00</h1>
            <button type="button" class="bg-slate-600 text-white px-14 py-2 rounded-lg block mx-auto mt-5">簽到</button>
        </div>
    </div>
</template>


<style scoped>
.area{
    height: 90vh;
}
</style>