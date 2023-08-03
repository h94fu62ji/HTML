<script>
export default {
    data() {
        return {
            labelArea : ['w-24','text-sb'],
            label : ['m-4','flex','items-center'],
            input : ['text-center','mx-4','w-full','py-2'],
            dataList : ['flex','items-center','justify-between'],
        }
    },
}
</script>
<template>
    <div class="w-full color3">
        <h1>請假申請</h1>

        <div :class="label">
            <div :class="labelArea">
                <label for="">假別</label>
            </div>
            <select name="" id="" :class="input">
                <option value="事假">事假</option>
                <option value="病假">病假</option>
                <option value="病假">喪假</option>
            </select>
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">開始時間</label>
            </div>
            <input type="datetime-local" :class="input">
        </div>

        <div :class="label">
            <div :class="labelArea">
                <label for="">結束時間</label>
            </div>
            <input type="datetime-local" :class="input">
        </div>

        <button type="button" class="color2 btn">申 請</button>

        <div>
            <h1>假單狀態</h1>
            <div class="h-52 color4 m-4 ">
                <div :class="dataList">
                    <h1 style="width: 17%;">開始日期</h1>
                    <h1 style="width: 20%;">丨結束日期</h1>
                    <h1 style="width: 63%;">丨批准狀態</h1>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style>
    
</style>