<script>
// pinia 方法
import { mapActions } from 'pinia'
// 自訂 pinia 資料庫
import indexStatus from '../store/indexStatus';
export default{
    data(){
        return{
            arr: ["Hax","Luca","Toby","Oppen"],

            arr2: [
                {
                name: "Hax",
                tel: 886981935111,
                address: "新北市淡水區"
                },
                {
                name: "Luca",
                tel: 886981935222,
                address: "台南市永康區"
                },
                {
                name: "Toby",
                tel: 886981935333,
                address: "台中市清水區"
                },
                {
                name: "Oppen",
                tel: 886981935444,
                address: "全家市熱狗區"
                },
            ]
        }
    },
    methods:{
        ...mapActions(indexStatus,['setLocation'])
    },
    mounted() {
        this.setLocation(3)
    },
}
</script>


<template>
    <h1>V-for</h1>

    <ul>
        <li v-for="(item,index) in arr" :key="index">{{ index + " " + item }}</li>
    </ul>

    <ul v-for="item in arr2">
        <li>{{ item.name }}</li>
        <li>{{ item.tel }}</li>
        <li>{{ item.address }}</li>
    </ul>
</template>



<style lang="scss" scoped>
ul{
    padding: 0;
}
li{
    list-style: none;
}
    
</style>