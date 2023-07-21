<script>
export default {
    data() {
        return {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs_aEHkKmgva-dJGtxwgq4LPMjOfK3ttqRA&usqp=CAU",
            isRed: false,
            isBold: false,
            styleArr : [],
        }
    },
    
}
</script>

<template>
    <h1>V-bind</h1>
    <!-- 處理HTML標籤 屬性 -->
    <!-- V-model 標籤 值 -->
    <h3>img V-bind:src</h3>
    <img :src="imgUrl" alt="">

    <h3>class {}</h3>
    <div>
        <input type="checkbox" name="style1" id="red" v-model="isRed">
        <label for="red">Red</label>
        
        <input type="checkbox" name="style1" id="bold" v-model="isBold">
        <label for="bold">Bold</label>
    </div>
    <p :class="{
        // key:class value:判斷式
        red : isRed,
        bold : isBold
        }">Lorem ipsum dolor sit amet.</p>

    <h3>class []</h3>
    <div>
        <input type="checkbox" name="style" v-model="styleArr" value="red" id="red2">
        <label for="red2">Red</label>
        
        <input type="checkbox" name="style" v-model="styleArr" value="bold" id="bold2">
        <label for="bold2">Bold</label>

        <input type="checkbox" name="style" v-model="styleArr" value="large" id="large2">
        <label for="large2">Large</label>
    </div>

    <p :class="styleArr">Lorem ipsum dolor sit amet.</p>



</template>

<style lang="scss" scoped>
.red{
    color: red;
}
.bold{
    font-weight: bold;
}
.large{
    font-size: 2rem;
}
</style>