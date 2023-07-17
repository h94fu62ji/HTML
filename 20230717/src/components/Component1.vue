<script setup>
import card from "./Card.vue"
import but from "./Button.vue"
</script>



<template>
    <div class="container">
        <h2>元件1</h2>
        <div class="flex">
            <card/>
            <card/>
            <card/>
        </div>
        <but/>
    </div>
</template>


<style lang="scss" scoped>
.container{
    border: 2px solid red;
    h2{
        color: blue;
    }
}
.flex{
    display: flex;
}


</style>