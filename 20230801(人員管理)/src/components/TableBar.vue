<script>
import { mapActions , mapState } from 'pinia'
import indexStore from '../store/Store'
export default {
    props:['title','text'],
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
        ...mapActions(indexStore , []),
        clickHA(x){
            console.log(x)
        }
    },
    
}
</script>

<template>
    <div class="border-t-2 border-b-2 my-5 border-black">
        <table>
            <tr>
                <th v-for="item in title.slice(0,-1)">{{ item }}</th>
                <th>{{ title[title.length-1] }}</th>
            </tr>
            <tr class="cursor-pointer hover:text-cyan-700 h-8" v-for="(item,index) in text" @click="clickHA(index)">
                <td v-for="texType in title">{{ item[texType] }}</td>
            </tr>
        </table>
    </div>

</template>


<style scoped>
table{
    margin: 10px 20px;
    text-align: left;
}
tr{
    margin: 5px 0;
}
th{
    border-left: 1px solid black;
    padding-left: 5px;
    padding-right: 30px;
}
td{
    padding-left: 5px;
    padding-right: 30px;
}
</style>