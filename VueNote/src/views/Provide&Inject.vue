<script>
import ComA from "../components/ComA.vue"
export default {
    components:{
        ComA,
    },
    provide() {
        return {
            // key :value
            text : "外層資料"
        }
    }
}
</script>

<template>
    <h1>Provide & Inject</h1>
    <div class="container">
        <ComA/>
    </div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
}
</style>