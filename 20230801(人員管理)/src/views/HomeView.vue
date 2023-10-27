<script>
import PhotoArea from '../components/PhotoArea.vue';
import TableBar from '../components/TableBar.vue';
export default {
    data() {
        return {
            newsTitle: ['title', 'time', 'text'],
            newsTitleName: { title: '標題', time: '時間', text: '內文' },
            newsText: [
                {
                    title: "08/04颱風假",
                    time: "08/03",
                    text: "08/04 全體員工放假一日",
                },
                {
                    title: "年度薪資調漲",
                    time: "07/30",
                    text: "08/05 薪資調漲幅度公告",
                },
                {
                    title: "施工事項",
                    time: "07/29",
                    text: "B棟入口施工，預計時間8/15~8/20",
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
        <PhotoArea />
        <hr class="border-black border-1">

        <div class="area">
            <h1>最新消息 ❗❗</h1>
            <TableBar :title="newsTitle" :text="newsText" :titleName="newsTitleName" />
        </div>

    </div>
</template>

<style scoped></style>