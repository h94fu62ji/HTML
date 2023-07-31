<script>
export default {
    data() {
        return {
            text : "",
            amount : null,
            type : false,
            textWarn : false,
            AmountWarn : false,
        }
    },
    methods: {
        callOut(){
            this.$emit('push')
        },
        pushValue(){
            this.textWarn = false;
            this.AmountWarn = false;
            let x = 0
            if(this.text == "" || this.text == null){
                this.textWarn = true;
                x++
            }
            if(this.amount == 0 || this.amount == null){
                this.AmountWarn = true;
                x++
            }
            if( x == 0 ){
                this.$emit("event",[this.text,this.amount,this.type]);
            }
            
        },
    },
}
</script>

<template>
    <div class="bg">
        <div class="info">
            <div class="close" @click="callOut">x</div>
            <div class="input-area m1">
                <label for="Text">Text</label>
                <label class="warn" v-if="textWarn">please enter text</label>
                <input class="input" id="Text" type="text" v-model="text">
            </div>
            <div class="input-area m2">
                <label for="Amount">Amount</label>
                <label class="warn" v-if="AmountWarn">please enter amount</label>
                <input class="input" id="Amount" type="number" v-model="amount">
                <div class="check-area">
                    <input type="checkbox" v-model="type">
                    <label for="">income</label>
                </div>
            </div>

            <button type="button" @click="pushValue">Add transaction</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg{
    width: 100vw;height: 100vh;
    background-color: #0B354DB2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;left: 0;
    .info{
        z-index: 10;
        width: 400px;
        background-color: #fff;
        border-radius: 20px;
        border: 0;
        position: relative;
        .input-area{
            width: 60%;
            margin:  auto ;
            color: #3C7FA5;
            position: relative;


            .input{
                width: 100%;height: 1.5rem;
                margin-top: 5px;
                border: 2px solid #3C7FA5;
                border-radius: 8px;
                padding-left: 3px;
            }
            .warn{
                color: red;
                font-size: .5rem;
                position: absolute;
                top: 3px;right: 0;
            }
        }
        .m1{
            margin-top: 50px;
        }
        .m2{
            margin-top: 20px;
        }
        .check-area{
            margin-top: 5px;
            display: flex;
            align-items: center;
            input{
                width: 1rem;height: 1rem;
                margin-right: 5px;
            }
            
        }
        button{
            display: block;
            margin: 40px auto 40px auto;
            background-color: #3C7FA5;
            color: #fff;
            padding: 8px 30px;
            border: 0;
            border-radius: 5px;
            font-size: 1rem;
            user-select: none;
            cursor: pointer;
        }
        .close{
            position: absolute;
            top: 5px;right: 20px;
            font-size: 2rem ;
            user-select: none;
            cursor: pointer;
        }
    }  
}

</style>