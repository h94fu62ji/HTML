<script></script>

<template>
    <div class="bg">
        <div class="info">
            <div class="close">x</div>
            <div class="input-area">
                <label for="Text">Text</label>
                <input id="Text" type="text">
            </div>
            <div class="input-area">
                <label for="Amount">Amount</label>
                <input id="Amount" type="number">
            </div>
            <button type="button">Add transaction</button>
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
        .input-area{
            width: 60%;
            margin: 30px auto;
            input{
                width: 100%;
            }
        }
        button{
            display: block;
            margin: 40px auto;
            background-color: #3C7FA5;
            color: #fff;
            padding: 5px 20px;
            border: 0;
            border-radius: 5px;
        }
    }  
}
</style>