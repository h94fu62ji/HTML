<script>
export default {
    methods: {
        callOut(){
            this.$emit('push')
        },
        callDel(){
            this.$emit('event')
            this.callOut()
        },
    }
}
</script>
<template>
    <div class="bg">
        <div class="info">
            <div class="close" @click="callOut">x</div>
            <h1>Sure to Delete?</h1>
            <button type="button" @click="callDel">Delete</button>
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
        position: relative;
        width: 400px;
        background-color: #fff;
        border-radius: 20px;
        border: 0;
        h1{
            color: #3C7FA5;
            text-align: center;
            padding: 50px;
        }
        button{
            display: block;
            margin: 20px auto 40px auto;
            background-color: #A53C42;
            color: #fff;
            padding: 8px 50px;
            border: 0;
            border-radius: 5px;
            font-size: 1rem;
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