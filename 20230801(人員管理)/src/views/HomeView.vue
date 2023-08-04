<script>
import PhotoArea from '../components/PhotoArea.vue';
import TableBar from '../components/TableBar.vue';
export default {
    data() {
        return {
            newsTitle : ['標題','時間','內文'],
            newsText :[
                {
                標題 : "08/04颱風假",
                時間 : "08/03",
                內文 : "08/04 全體員工放假一日",
                },
                {
                標題 : "年度薪資調漲",
                時間 : "07/30",
                內文 : "08/05 薪資調漲幅度公告",
                },
                {
                標題 : "施工事項",
                時間 : "07/29",
                內文 : "B棟入口施工，預計時間8/15~8/20",
                },
            ]
        }
    },
    components: {
        PhotoArea,
        TableBar
    }
}
</script>

<template>
    <div class="all-area">
        <PhotoArea/>
        <hr class="border-black border-1">

        <div class="area">
            <h1>最新消息 ❗❗</h1>
            <TableBar :title="newsTitle" :text="newsText"/>
        </div>
        
    </div>
    

</template>

<style scoped>
    
</style>