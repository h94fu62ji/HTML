<script setup>
</script>

<template>
    <button type="button">Click</button>
</template>

<style lang="scss" scoped>
button{
    background-color: #e9b7b7;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        scale: 1.05;
    }

    &:active{
        scale: .95;
    }


}
</style>