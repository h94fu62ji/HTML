<script>
import { RouterLink } from 'vue-router'
import add from '../components/Add.vue'
import databox from '../components/DataBox.vue'

export default {
    components: {
        add,
        // dele,
        databox,
    },
    created() {
        // localStorage.getItem(this.account) != null || sessionStorage.getItem(this.account) != null 
         
    },
    data() {
        return{
            isAdd : false,
            dataList : [
                {
                    name : "getmoney",
                    money : 40000,
                    type : true,
                }
                
            ]
        }
    },
    methods: {
        switchAdd(){
            this.isAdd = !this.isAdd
        },
        getInfo(x) {
            this.dataList.push({name : x[0],money : x[1],type : x[2]})
            console.log(this.dataList)
            this.switchAdd()
        },
        getDel(x) {
            console.log("click",x)

            this.dataList = this.dataList.filter(function(item,index){
                return (index != x)
            })
        }
    },
    computed: {

        income() {
            return this.dataList.reduce(function(sum,item){
                if (item.type){
                    return sum + item.money
                }
                else {
                    return sum
                }
            },0)
        },
        expense() {
            return this.dataList.reduce(function(sum,item){
                if (item.type){
                    return sum
                }
                else {
                    return sum + item.money
                }
            },0)
        },
        balance() {
            return (this.income - this.expense)
        },
    }
}

</script>

<template>
    <div class="all-area">

        <div class="left-area">
            <h1>Expense Tracker</h1>
            <h1>Kouhei</h1>
            <div>
                <h2>YOUR BALANCE</h2>
                <h1 class="money">{{ "$ " + balance }}</h1>
            </div>
            <div class="fake"></div>
        </div>

        <div class="fake-left-area"></div>

        <div class="right-area">
            <div>
                <div class="money-area">
                    <div class="money-box color1">
                        <h1>INCOME</h1>
                        <h1>{{ "$ " + income }}</h1>
                    </div>
                    <div class="money-box color2">
                        <h1>EXPENSE</h1>
                        <h1>{{ "$ " + expense }}</h1>
                    </div>
                </div>

                <button type="button" class="add" @click="switchAdd">Add transaction</button>

                <div class="data-area">
                    <databox v-for="(item, index) in dataList" :name="item.name" :money="item.money" :type="item.type" :index="index" @event="getDel"/>
                    <footer></footer>
                </div>
                
            </div>
        </div>

        

    </div>
    <add v-if="isAdd" @push="switchAdd" @event="getInfo"/>
    <!-- <dele v-if="isDele" @push="switchDel" @event="getDel"/> -->
</template>

<style lang="scss" scoped>
.all-area{
    width: 98vw;height: 100vh;
    display: flex;
    position: relative;
}
.fake-left-area{
    width: 25vw; height: 100vh;
}
.left-area{
    position: fixed;
    top: 0;left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #3C7FA5;
    color: #FFF;
    width: 25vw; height: 100vh;
    text-align: center;
    h1{
        font-size: 2rem;
    }

    .money{
        font-size: 2.5rem;
        word-wrap: break-word;
        margin: 0 auto;
    }
    .fake{
        width: 100%;height: 100px;
    }
}
.right-area{
    width: 100%;
    display: flex;
    justify-content: space-around;

    .money-area{
        width: 400px;
        display: flex;
        justify-content: space-between;
        margin-top: 200px;
        .money-box{
            text-align: center;
        }
        .color1{
            color: #70A53C;
        }
        .color2{
            color: #A53C42;
        }
    }
    .add{
        margin: 50px auto;
        display: block;
        background-color: #3C7FA5;
        color: #FFF;
        padding: 10px 50px;
        border: 0;
        border-radius: 10px;
        cursor: pointer;
        user-select: none;
    }
    .data-area{
        width: 400px;
    }
}
footer{
    width: 100%; height: 200px;
}
</style>