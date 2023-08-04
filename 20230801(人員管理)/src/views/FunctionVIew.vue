<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../store/Store'
import FunctionBar from '../components/FunctionBar.vue'
import PopWindow from '../components/PopWindow.vue'
export default {
    components:{
        FunctionBar,
        PopWindow,
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['popwindow'])
    },
    methods:{
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore , ['switchPop'])
    },
}
</script>


<template>
        <div class="all-area mt-10 flex">
            <div class="mr-10">
                <FunctionBar/>
            </div>
            <router-view/>
        </div>

    <PopWindow v-if="popwindow" :title="'登入成功'" @push="switchPop"/>

</template>


<style scoped>

</style>