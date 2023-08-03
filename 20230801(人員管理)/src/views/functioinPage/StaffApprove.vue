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
        <h1>假單批准</h1>
    
        <div class="h-52 color4 m-4 ">
            <div :class="dataList">
                <h1 style="width: 17%;">開始日期</h1>
                <h1 style="width: 20%;">丨結束日期</h1>
                <h1 style="width: 63%;">丨批准</h1>
            </div>
        </div>
    </div>

</template>
<style>
    
</style>