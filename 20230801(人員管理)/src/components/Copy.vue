<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../store/Store'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore , []),
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore , [])
    },
    
}
</script>


<template>

</template>


<style scoped>
    
</style>