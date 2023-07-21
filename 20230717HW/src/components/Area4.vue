<script setup>

</script>

<template>

    <div class="area">
        <div class="bg"></div>
        <div class="photo"></div>
        <div class="text">
            <h1>New Arrival</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus architecto praesentium eos beatae laborum vel dicta expedita laudantium, at, placeat ipsam sunt similique reiciendis.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.area{
    margin: 50px auto;
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .photo{
        width: 60%;
        height: 250px;
        background-image: url(../assets/8.png);
        z-index: 1;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 3px 3px 5px rgb(100,100,100);
    }
    .text{
        width: 35%;
        height: 250px;
        background-color: #F7CDC0;
        h1{
            padding: 20px;
        }
        p{
            padding: 0 15px;
        }
    }
}
.bg{
    height: 250px;
    width: 50vw;
    background-color: #E49E9E;
    position: absolute;
    left: 0;
    z-index: 0;
    padding: 25px 0;

}

</style>
