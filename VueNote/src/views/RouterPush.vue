<script>
export default {
    data() {
        return {
            text:"",
        }
    },
    methods:{
        submit() {
            // 切換網址
            // this.$router.push("/Router-props")
            
            this.$router.push({
                name:"RouterProps",
                params: {
                    propText: this.text
                }
            })
        }
    },
}
</script>
<template>
    <h1>Router Push</h1>
    <input type="text" v-model="text">
    <button type="button" @click="submit">To Props Page</button>
</template>
<style lang="scss" scoped>
    
</style>