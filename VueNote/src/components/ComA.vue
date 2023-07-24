<script>
import ComB from "../components/ComB.vue"
export default {
    components:{
        ComB
    },
}
</script>

<template>
    <div class="wrap">
        <h2>ComA</h2>
        <ComB/>
    </div>

</template>

<style lang="scss" scoped>
.wrap{
    border: 2px solid black;
    width: 400px;height: 400px;
    margin: 0 auto;
}
</style>