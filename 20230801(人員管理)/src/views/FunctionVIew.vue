<script>
import FunctionBar from '../components/FunctionBar.vue'
export default {
    components:{
        FunctionBar
    }
}
</script>


<template>
    <div class="area mt-10 flex">
        <div class="mr-10">
            <FunctionBar/>
        </div>
        <router-view/>
    </div>

</template>


<style scoped>

</style>