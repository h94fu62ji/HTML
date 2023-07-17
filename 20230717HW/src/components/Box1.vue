<script setup>
import but from "./Button1.vue"
</script>

<template>
    <div class="box">
        <but class="abs"/>
    </div>
</template>

<style lang="scss" scoped>
.box{
    height: 250px;
    width: 180px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 3px 3px 5px rgb(100,100,100);
    .abs{
        position: absolute;
        bottom: 10px;
        right: 30px;
    }
}
</style>
