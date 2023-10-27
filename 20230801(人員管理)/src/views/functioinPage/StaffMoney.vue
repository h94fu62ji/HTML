<script>
import { mapActions, mapState } from 'pinia'
import indexStore from '../../store/Store'
import TableBar from '../../components/TableBar.vue'
export default {
    components: {
        TableBar
    },
    data() {
        return {
            dataTitle: ['單位', '工號', '姓名', '資料'],
            dataText: [
                {
                }
            ]
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['labelArea', 'label', 'input', 'dataList'])
    },
}
</script>
<template>
    <div class="w-full color3">
        <h1>薪資調整</h1>
        <div :class="label">
            <div :class="labelArea">
                <label for="">工號</label>
            </div>
            <input type="text" :class="input">
        </div>


        <button type="button" class="color2 btn">搜 尋</button>


        <!-- <TableBar :title="dataTitle"/> -->

    </div>
</template>
<style></style>