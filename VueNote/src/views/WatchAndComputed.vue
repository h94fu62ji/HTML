<script>
export default {
    data() {
        return {
            point : 0,
            ntd : 0,
        }
    },
    methods: {
        pointPlus(){
            this.point++;
        }
    },
    // 監控 data 裡面的變數
    watch:{
        point() {
            this.ntd = Math.floor(this.point*31.37)
        }
    },
    // 處理過後的只能用在輸出)變數
    // 想要做一些換算，處理之後
    // 顯示在畫面上的臨時變數
    computed:{
        jpy(){
            return Math.floor(this.point*141.6)
        }
    },
}
</script>
<template>
    <h1>Watch & Computed</h1>
    <h2>美元：{{ point }}</h2>
    <h2>台幣：{{ ntd }}</h2>
    <h2>日圓：{{ jpy }}</h2>
    <div @click="pointPlus" class="cookie">
        <div class="choco choco1"></div>
        <div class="choco choco2"></div>
        <div class="choco choco3"></div>
    </div>
</template>
<style lang="scss" scoped>
.cookie{
    width: 150px;height: 150px;
    background: #9f8c6f;
    border-radius: 50%;
    margin: 0 auto;
    cursor: pointer;
    position: relative;
    transition: 200ms;
    &:hover{
        scale: 1.05;
        
    }
    &:active{
        scale: .95;
    }
}
.choco{
    width: 20px;height: 20px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
}
.choco1{
    top: 30px;
    left: 30px;
}
.choco2{
    top: 60px;
    left: 20px;
}
.choco3{
    top: 40px;
    left: 60px;
}

</style>