<script></script>

<template>
    <div class="bg">
        <div class="info">
            <div class="close">x</div>
            <h1>Sure to Delete?</h1>
            <button type="button">delete</button>
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
        width: 400px;
        background-color: #fff;
        border-radius: 20px;
        border: 0;
        h1{
            color: #3C7FA5;
            text-align: center;
            padding: 30px;
        }
        button{
            display: block;
            margin: 40px auto;
            background-color: #A53C42;
            color: #fff;
            padding: 5px 50px;
            border: 0;
            border-radius: 5px;
            font-size: 1rem;
        }
    }  
}
</style>