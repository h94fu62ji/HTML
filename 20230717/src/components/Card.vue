<script setup>
import But from "./button.vue"
</script>

<template>
    <div class="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyKV7u90eKeJyMCtEBO4kgv1t0a6q9FSqPZbOCHCTtLTjxMxDlOvABaukrhETUpRpuf4&usqp=CAU" alt="外星人">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas?</p>
        <but/>
    </div>
</template>

<style lang="scss" scoped>
.card{
    width: 150px;
    border: 2px solid black;
    padding: 20px;

    
    img{
        width: 100%;
    }
}
</style>