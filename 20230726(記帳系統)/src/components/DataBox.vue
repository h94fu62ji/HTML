<script>
import dele from './DeleteBox.vue'
export default {
    components:{
        dele,
    },
    props:["name","money","index"],
    data() {
        return {
            isDele : false,
        }
    },
    methods: {
        callOut(){
            this.$emit('push')
        },
        callDel(){
            this.$emit('event',this.index)
        },
        switchDel(){
            this.isDele = !this.isDele
        },
    }
}
</script>
<template>
    <div class="box">
        <div class="text">
            <p>{{ name }}</p>
        </div>
        <div class="right-box">
            <p>{{ "$" + money}}</p>
            <button type="button" @click="switchDel">Delete</button>
        </div>
    </div>
    <dele v-if="isDele" @push="switchDel" @event="callDel"/>
</template>

<style lang="scss" scoped>
.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border: 2px solid #3C7FA5;
    border-radius: 10px;
    margin: 10px 0;
    .text{
        width: 55%;
        word-wrap: break-word;
    }
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
            cursor: pointer;
            user-select: none;
        }
    }
}
</style>