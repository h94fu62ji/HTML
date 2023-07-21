<script>
import Child from "../components/Child.vue"
export default {
    components: {
        Child
    },
    methods: {
        getInfo(x) {
            console.log("GetInfo")
            console.log("接收到資訊了")
            console.log(x)
        }
    },
}
</script>

<template>
    <h1>Emit</h1>
    
    <div class="child-area">
        <Child 
        :title="'Emit 練習'" 
        :text="'子元件傳父元件'"
        @event="getInfo"
        />

    </div>
    <div style="background-color: #fff;"></div>
</template>

<style lang="scss" scoped>
.child-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>