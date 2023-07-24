<script>
import SetBox from "../components/SetBox.vue"
export default {
    components:{
        SetBox
    },
    data() {
        return {
            setting:["お気に入り物件",
            "お気に入りタッグ",
            "ユーザー設定",
            "XXXXXX",
            "OOOOOO",
            "お問い合わせ履歷",
            ]
        }
    },
}
</script>

<template>
    <h1></h1>
    <div class="all-area">
        <div class="Inquiry">
            <SetBox v-for="item in setting" :text="item"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.all-area{
    display: flex;
    justify-content: center;
}
.Inquiry{
    display: flex;
    width: 700px;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
