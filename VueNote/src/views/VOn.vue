<script>
export default {
    // 變數 / 資料
    data() {
        return {
            text: "",
            view: "",
        }
    },
    // 方法 methods
    methods: {
        // 語法糖
        call(str) {
            this.view = str + "我被點擊了!"
        },
    },
    // 生命週期 (原生寫JS程式碼的地方)
    beforeCreate() {
        console.log("元件創造前")
    },
    created() {
        console.log("元件創造後")
    },
    beforeMount() {
        console.log("元件綁定前")
    },
    mounted() {
        console.log("元件綁定後")
    },
    // beforeUpdate() {
        
    // },
    // updated() {
        
    // },
}
</script>

<template>
    <h1>V-on</h1>
    <input type="text" v-model.lazy="text">
    <button type="button" @click="call(text)">Click</button>
    <p>{{ view }}</p>



</template>

<style lang="scss" scoped>
    
</style>