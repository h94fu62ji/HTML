<script>
export default {
    props:["city","weather","tempMax","tempMin"],
}
</script>
<template >
    <div class="box">
        <div class="text">
            <h2>{{ city }}</h2>
            <p>{{ weather }}</p>
            <h2>{{ tempMin + " ~ " + tempMax + "°C" }}</h2>
        </div>
        <div class="img"></div>

        
    </div>
</template>
<style scoped>
.box{
    width: 180px;height: 80px;
    background-color: white;
    border-radius: 10px;
    border: 0;
    margin: 30px;
    box-shadow: 3px 3px 5px rgb(100,100,100);
    padding: 10px;
    position: relative;
    transition: 300ms;

    &:hover{
        scale: 1.2;
    }
}
.img{
    width: 50px;height: 50px;
    background-image: url(../../public/weather.png);
    background-size: cover;
    position: absolute;
    right: 10px;
    top: 0;
}
</style>