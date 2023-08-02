<script>
export default {
    data() {
        return {
            labelArea : ['w-20','text-sb'],
            label : ['m-4','flex','items-center'],
            input : ['text-center','mx-4','w-48']
        }
    },
}
</script>
<template>
    <div class="w-full color3">
        <h1>新增成員</h1>
        
        <div :class="label">
            <div :class="labelArea">
                <label for="">預設工號</label>
            </div>
            <input type="text" :class="input">
        </div>
        
        <div :class="label">
            <div :class="labelArea">
                <label for="">登入密碼</label>
            </div>
            <input type="text" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">選擇單位</label>
            </div>
            <select name="" id="" :class="input">
                <option value="501">製造組501</option>
                <option value="502">生產組502</option>
                <option value="503">出貨組503</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">姓名</label>
            </div>
            <input type="text" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">信箱</label>
            </div>
            <input type="text" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">權限</label>
            </div>
            <select name="" id="" :class="input">
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
            <input type="date" :class="input">
        </div>
        
        <!-- <div :class="label">
            <div :class="labelArea">
                <label for="">狀態</label>
            </div>
            <select name="" id="" :class="input">
                <option value='true'>在職</option>
                <option value='false'>停用</option>
            </select>
        </div> -->

        <div :class="label">
            <div :class="labelArea">
                <label for="">到職日</label>
            </div>
            <input type="date" :class="input">
        </div>

    </div>
</template>
<style>
    
</style>