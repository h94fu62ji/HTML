<script setup>
</script>

<template>
    <button class="point" type="button">Detail</button>
</template>

<style lang="scss" scoped>
button{
    background-color: black;
    padding: 7px 25px;
    color: white;
    font-size: 1rem;
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
