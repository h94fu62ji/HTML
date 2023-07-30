<script>
import { RouterLink } from 'vue-router';
export default {

}

</script>

<template>
    <div class="all-area">
        <div class="main-area">
            <h1>Expense Tracker</h1>
            <div class="input-area">
                <label for="Account">Account</label>
                <input type="email" id="Account">
            </div>
            <div class="input-area">
                <label for="Password">Password</label>
                <input type="password" id="Password">
            </div>
            <div class="but-area">
                <RouterLink class="button color1" to="/signup">Sign Up</RouterLink>
                <RouterLink class="button color2" to="/home">Log In</RouterLink>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.all-area{
    width: 100vw;height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    text-align: center;
    color: #3C7FA5;
    font-size: 2.5rem;
}
.input-area{
    width: 350px;
    margin-top: 20px;
    label{
        color: #AFB1B6;
    }
    input{
        width: 100%;
        height: 2rem;
        padding-left: 10px;
        border-radius: 10px;
        border: 1px solid #AFB1B6;
    }
}
.but-area{
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .button{
        padding: 10px 50px;
        border: 0;
        color: #FFF;
        border-radius: 10px;
        text-align: center;
        font-size: 1rem;
        text-decoration: none;
    }
    .color1{
        background-color: #A1B9C7;
    }
    .color2{
        background-color: #3C7FA5;
    }
}

</style>