<script>
export default {
    // 接收父層變數
    // 接口
    props:["title" ,"text"],
    data() {
        return {
            emitText : "",
        }
    },
    // 方法
    methods: {
        push() {
            console.log("Push")
            console.log(this.emitText)
            this.$emit("event", this.emitText)
        }
    },
}
</script>

<template>
    <div class="wrap">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>

        <input type="text" v-model="emitText">
        <button type="button" @click="push">Push</button>
    </div>
</template>

<style lang="scss" scoped>
.wrap{
    border: 2px solid black;
    width: 300px;
    margin: 2rem 0;
}
</style>