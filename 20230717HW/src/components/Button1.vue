<script setup>
</script>

<template>
    <button class="point" type="button">item</button>
</template>

<style lang="scss" scoped>
button{
    background-color: #D38282;
    padding: 5px 40px;
    color: white;
    font-size: 1.25rem;
    border: 0;
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
