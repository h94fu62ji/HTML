<script setup>
</script>

<template>
    <div class="area">
        <div class="text">
            <h1>title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut expedita ad, in enim molestiae voluptas animi totam dolore voluptates sapiente.</p>
        </div>
        <div class="photo"></div>
    </div>
</template>

<style lang="scss" scoped>
.area{
    margin: 30px auto;
    width: 600px;
    height: 250px;
    display: flex;


    .text{
        width: 40%;
        padding: 30px;
    }
    .photo{
        background-image: url(../../public/1.png) ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;
        width: 60%;
        height: 250px;
        box-shadow: 3px 3px 5px rgb(100,100,100);
    }
}
</style>
