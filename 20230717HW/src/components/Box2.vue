<script setup>
import but from "./Button2.vue"
</script>

<template>
    <div class="box">
        <div class="img"></div>
        <div class="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, in?</p>
            <but class="abs"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box{
    height: 250px;
    width: 180px;
    position: relative;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    box-shadow: 3px 3px 5px rgb(100,100,100);
    background-color: white;
    .img{
        width: 100%;height: 50%;
    }
    .text{
        width: 100%;height: 50%;
        p{
            padding: 0 10px;
        }
        
    }
    .abs{
        position: absolute;
        bottom: 10px;
        right: 70px;
    }
}
</style>
