<script>
import InputArea from '../components/InputArea.vue';
import ViewArea from '../components/ViewArea.vue';
export default {
    components:{
        InputArea,
        ViewArea,
    },
    data() {
        return {
            list : null,
            j:0,
            i:0,
            y:0,
            k:0,
            giveLen:0,
            giveList:"",
        }
    },

    methods: {

        getInput(x){
            console.log("click")
            this.list = []
            this.giveList = ""
            for (this.j = 0 ; this.j <= x ; this.j++ ){
                this.y = 0
                for(this.i = 1 ; this.i <= this.j ; this.i++){
                    if( this.j % this.i == 0){
                        this.y++
                    // console.log(this.j ,this.i)
                    }
                    if(this.y>2){
                        break
                    }
                }
                if(this.y == 2){
                    this.list.push(this.j)
                }
            }
            // console.log(this.list)
            this.giveLen = this.list.length

            for(this.k = 0 ; this.k < this.giveLen ; this.k++){
                this.giveList += this.list[this.k] + " "
            }
        }
    },
}
</script>

<template lang="">
    <div class="area">
        <InputArea @event="getInput"/>
        <ViewArea 
        :resultLen = "giveLen"
        :result = "giveList"
        />
    </div>
</template>

<style lang="scss" scoped>
.area{
    width: 100%;
    background-color: white;
    text-align: center;
    padding: 20px 0;
    border-radius: 15px;
    margin: 10px 0;
}
</style>