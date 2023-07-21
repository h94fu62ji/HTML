<script>
import box from "./Box1.vue"
export default{
    components:{
        box
    },
    data() {
        return {
            imgUrl:[
                'background-image: url(./../public/2.png)',
                'background-image: url(./../public/3.png)',
                'background-image: url(./../public/4.png)',
            ]
        }
    },
}
</script>

<template>
    <h1>On Sale</h1>
    <div class="area">
        <box v-for="item in imgUrl" :photo="item"/>
    </div>
</template>

<style lang="scss" scoped>
h1{
    text-align: center;
    padding-top: 30px;
}
.area{
    margin: 30px auto;
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
