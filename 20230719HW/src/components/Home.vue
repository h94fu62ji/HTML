<script>
export default {
    data() {
        return {
            allSave : "0",
            save : "0",
            view : "0",
            i : 1,
        }
    },
    methods: {
        frist(){
            if(this.save[0] == 0){
                this.save = ""
                this.allSave = ""
            }
        },
        one(){
            this.frist();
            this.save += "1";
            this.allSave += "1";
            this.end();
        },
        two(){
            this.frist();
            this.save += "2";
            this.allSave += "2";
            this.end();
        },
        three(){
            this.frist();
            this.save += "3";
            this.allSave += "3";
            this.end();
        },
        four(){
            this.frist();
            this.save += "4";
            this.allSave += "4";
            this.end();
        },
        five(){
            this.frist();
            this.save += "5";
            this.allSave += "5";
            this.end();
        },
        six(){
            this.frist();
            this.save += "6";
            this.allSave += "6";
            this.end();
        },
        seven(){
            this.frist();
            this.save += "7";
            this.allSave += "7";
            this.end();
        },
        eight(){
            this.frist();
            this.save += "8";
            this.allSave += "8";
            this.end();
        },
        nine(){
            this.frist();
            this.save += "9";
            this.allSave += "9";
            this.end();
        },
        zero(){
            this.frist();
            this.save += "0";
            this.allSave += "0";
            this.end();
        },
        zerozero(){
            this.frist();
            this.save += "00";
            this.allSave += "00";
            this.end();
        },
        ac(){
            this.save = "0"
            this.view = "0"
            this.allSave = "0"
            this.end();
        },
        del(){
            this.save = this.save.slice(0,this.save.length-1)
            this.allSave = this.save.slice(0,this.allSave.length-1)
            this.end();
        },
        plus(){
            this.frist();
            this.save += "+"
            this.allSave += "+"
            this.end();
        },
        minus(){
            this.frist();
            this.save += "-"
            this.allSave += "-"
            this.end();
        },
        times(){
            this.frist();
            this.save += "*"
            this.allSave += "*"
            this.end();
        },
        divided(){
            this.frist();
            this.save += "/"
            this.allSave += "/"
            this.end();
        },
        dot(){
            this.frist();
            this.save += "."
            this.allSave += "."
            this.end();
        },
        equal(){
            this.frist();
            this.save = eval(this.save)
            this.allSave = eval(this.allSave)
            this.end();
        },
        end(){
            // this.pluspoint()
            this.view = this.save
            console.log(this.save,this.view,this.allSave)
        },
        pluspoint(){
            this.view = ""
            for(this.i = 1;this.i < this.save.length+1; this.i++){
                this.view += this.save[this.i-1]
                if(this.i % 3 == 0){
                    this.view += ","
                }
            console.log(this.view)
            }
        },
    }
}
</script>

<template>

    <div class="all_area">

    <!-- 上方顯示區 -->
        <div class="view_area">
            <p class="h1">{{ view }}</p>
            <p class="color2">{{ allSave }}</p>
        </div>
        <!-- 下方數字區 -->
        <div class="number_area">
            <button @click="seven" type="button">7</button>
            <button @click="eight" type="button">8</button>
            <button @click="nine" type="button">9</button>
            <button @click="divided" type="button" value="÷" class="color1">÷</button>
            <button @click="four" type="button">4</button>
            <button @click="five" type="button">5</button>
            <button @click="six" type="button">6</button>
            <button @click="times" type="button" class="color1">×</button>
            <button @click="one" type="button">1</button>
            <button @click="two" type="button">2</button>
            <button @click="three" type="button">3</button>
            <button @click="plus" type="button" value="+" class="color1">＋</button>
            <button @click="zero" type="button">0</button>
            <button @click="zerozero" type="button">00</button>
            <button @click="dot" type="button">.</button>
            <button @click="minus" type="button" class="color1">－</button>
            <button @click="ac" type="button" class="color2">AC</button>
            <button @click="del" type="button" class="color2">⇤</button>
            <button @click="equal" type="button" class="equal" >=</button>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.all_area{
    border-radius: 20px;
    box-shadow: 0 0 20px gray;
}
.view_area{
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    padding: 10px 10px 0 10px;
    width: 296px;
    background-color: rgb(5, 25, 54);
    color: #fff;
    border-radius: 20px 20px 0 0;

    .h1{
        font-size: 3.5rem;
        word-break: break-all;
    }
    p{
        padding-right: 10px;
    }
}
.number_area{
    width: 296px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 10px 20px 10px;
    background-color: rgb(7, 33, 69);
    border-radius: 0 0 20px 20px;
    
}
button{
    width: 70px;height: 60px;
    text-align: center;
    font-size: 1.5rem;
    background-color: rgb(7, 33, 69);
    margin: 4px 2px;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    color: white;
    &:hover{
        background-color: rgb(12,67,139);
    }
}
.color1{
    background-color: rgb(5, 25, 54);
    color: rgb(16,189,255);
}
.color2{
    color: rgb(16,189,255);
}
.equal{
    width: 144px;
    color: white;
    background: linear-gradient(to right ,rgb(0, 234, 255),blue 60%,rgb(140, 0, 255)95%);
    &:hover{
        background: linear-gradient(to left ,rgb(0, 234, 255),blue 60%,rgb(140, 0, 255)95%);
    }
}
</style>