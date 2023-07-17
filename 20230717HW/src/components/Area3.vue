<script setup>
import box from "./Box2.vue"
import but from "./Button1.vue"
</script>

<template>
    <h1>News</h1>
    <div class="area">
        <box style="background-image: url(../../public/5.png);"/>
        <box style="background-image: url(../../public/6.png);"/>
        <box style="background-image: url(../../public/7.png);"/>
    </div>
    <but class="but"/>
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
.but{
    margin: 0 auto;
    display: block;
}
</style>
