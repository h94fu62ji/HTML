<script>
import { RouterLink } from 'vue-router'
import add from '../components/Add.vue'
import dele from '../components/DeleteBox.vue'

export default {
    components: {
        add,
        dele,
    },
    data() {
        return{
            isAdd : false,
            isDele : true,
        }
    },
}

</script>

<template>
    <div class="all-area">

        <div class="left-area">
            <h1 class="title">Expense Tracker</h1>
            <h1 class="name">Kouhei</h1>
            <h2>YOUR BALANCE</h2>
            <h1 class="money">{{ "$" }}</h1>

        </div>


        <div class="right-area">
            <div>
                <div class="money-area">
                    <div class="money-box color1">
                        <h1>INCOME</h1>
                        <h1>$</h1>
                    </div>
                    <div class="money-box color2">
                        <h1>EXPENSE</h1>
                        <h1>$</h1>
                    </div>
                </div>

                <button type="button" class="add">Add transaction</button>

                <div class="data-area">
                    <div class="box">
                        <div>
                            <p>Breakfast</p>
                        </div>
                        <div class="right-box">
                            <p>500$</p>
                            <button type="button">Delete</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>



    </div>

    <add v-if="isAdd"></add>
    <dele v-if="isDele"></dele>
</template>

<style lang="scss" scoped>
.all-area{
    width: 100vw;height: 100vh;
    display: flex;
    position: relative;
}
.left-area{
    background-color: #3C7FA5;
    color: #FFF;
    width: 400px;
    text-align: center;
    h1{
        font-size: 2rem;
    }
    .title{
        padding: 200px 0;
    }
    .name{
        padding: 30px 0;
    }
    .money{
        width: 80%;
        font-size: 2.5rem;
        word-wrap: break-word;
        margin: 0 auto;
    }
}
.right-area{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .money-area{
        width: 400px;
        display: flex;
        justify-content: space-between;
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
    }
    .data-area{
        width: 400px;
        .box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            border: 2px solid #3C7FA5;
            border-radius: 10px;
            .right-box{
                display: flex;
                align-items: center;
                border-radius: 10px;
                button{
                    margin-left: 10px;
                    padding: 5px 10px;
                    background-color: #3C7FA5;
                    color: #FFF;
                    border: 0;
                    border-radius: 5px;

                }
            }
        }
    }
}

</style>