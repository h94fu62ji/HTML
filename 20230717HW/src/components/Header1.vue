<script setup>
import bar from "./Bar.vue"
</script>

<template>
    <header>
        <div class="area">
            <div class="logo point"></div>
            <bar class="point"/>
        </div>
    </header>
    <div class="faker"></div>
</template>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 100px;
        background-color: #fffaeaee;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;

    }
    .area{
        margin: 0 auto;
        width: 600px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo
    {
        width: 50px;height: 50px;
        background-color: #E49E9E;
    }
    .faker{
        width: 600px;height: 100px;
    }

    .point{
        cursor: pointer;
        &:hover{
            scale: 1.02;
        }
        &:active{
            scale: .98;
        }
    }
</style>
