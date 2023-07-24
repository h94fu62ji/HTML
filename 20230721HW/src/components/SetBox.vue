<script>
export default {
    props:["text"],
}
</script>

<template>
    <div class="box">{{text}}</div>
</template>

<style lang="scss" scoped>
.box{
    width: 200px;height: 140px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #475467;
    word-wrap: break-word;
    color: white;
    font-size: 1rem;
    padding: 20px;
    margin: 10px 0;
    cursor: pointer;
}
</style>