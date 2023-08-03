<script>
import PhotoArea from '../components/PhotoArea.vue';
export default {
    components: {
        PhotoArea
    }
}
</script>

<template>
    <div class="all-area">
        <PhotoArea/>
        <hr class="border-black border-1">

        <div class="area bg-slate-400 p-10">
            <h1>最新消息</h1>
            <ul>
                <li>標題 副標題 發布時間</li>
                <li>標題 副標題 發布時間</li>
                <li>標題 副標題 發布時間</li>
                <li>標題 副標題 發布時間</li>
            </ul>
                
        </div>
        
    </div>
    

</template>

<style scoped>
    
</style>