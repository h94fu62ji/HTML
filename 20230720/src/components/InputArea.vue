<script>
export default {
    data() {
        return {
            inputInfo : null,
        }
    },
    methods: {
        push() {
            this.$emit("event", this.inputInfo);
        }
    },
}
</script>

<template>
    
    <div class="area">
        <h2>找</h2>
        <input type="number" v-model.number="inputInfo">
        <h2>以內的質數：</h2>
        <button type="button" @click="push">搜 尋</button>
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
</style>