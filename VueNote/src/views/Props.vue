<script>
import Child from "../components/Child.vue"
export default {
    components: {
        Child
    },
    data() {
        return {
            cardInfo :[
                {
                    title:"標題一",
                    text:11111111,
                },
                {
                    title:"標題二",
                    text:22222222,
                },
                {
                    title:"標題三",
                    text:33333333,
                },
            ]
        }
    },
}
</script>

<template>
    <h1>Props</h1>
    <div class="child-area">
        <Child 
        v-for="info in cardInfo" 
        :title="info.title" 
        :text="info.text" />
    </div>
</template>


<style lang="scss" scoped>
.child-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>