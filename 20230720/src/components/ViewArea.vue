<script>
export default {

    props:["result","resultLen"],

    data() {
        return {
            count : "- -"
        }
    },
}
</script>

<template>
    
    <div class="area">
        <h2>總共：</h2>
        <!-- <h2 v-if="result === null">{{ count }}</h2> -->
        <h2>{{ resultLen }}</h2>
        <h2>個</h2>
    </div>
    <div class="area1">
        <h2>{{ result }}</h2>
    </div>

</template>

<style lang="scss" scoped>
.area{
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        padding: 0 10px;
    }
    input{
        width: 120px;height: 30px;
        border-radius: 10px;
        padding-left: 5px;
        font-size: 1.5rem;

    }
    button{
        width: 120px;height: 30px;
        border-radius: 10px;
        border: 0;
        background-color: gray;
        color: #FFF;
        cursor: pointer;
    }
}
.area1{
    width: 70%;
    margin: 30px auto;
}
</style>