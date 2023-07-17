<script setup>
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped>
div{
    width: 30px;height: 5px;
    background-color: black;
    border-radius: 10px;
    position: relative;
    &::before , &::after{
        content:"";
        width: inherit;height: inherit;
        background-color: inherit;
        border-radius: inherit;
        position: absolute;
    }
    &::before{
        top: -10px;
    }
    &::after{
        top: 10px;
    }
}
</style>
