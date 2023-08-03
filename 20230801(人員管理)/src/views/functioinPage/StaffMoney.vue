<script>
export default {
    data() {
        return {
            labelArea : ['w-24','text-sb'],
            label : ['m-4','flex','items-center'],
            input : ['text-center','mx-4','w-full'],
            dataList : ['flex','items-center','justify-between'],
        }
    },
}
</script>
<template>
    <div class="w-full color3">
        <h1>薪資調整</h1>
        <div :class="label">
            <div :class="labelArea">
                <label for="">工號</label>
            </div>
            <input type="text" :class="input">
        </div>


        <button type="button" class="color2 btn">搜 尋</button>
        
        <div class="h-96 color4 m-4 ">
            <div :class="dataList">
                <h1 style="width: 17%;">工號</h1>
                <h1 style="width: 20%;">丨姓名</h1>
                <h1 style="width: 63%;">丨資料</h1>
            </div>
        </div>
    </div>
</template>
<style>
    
</style>