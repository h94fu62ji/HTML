<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    RouterLink
    
}
</script>

<template>
    <div class="all-area">
        <div class="login-area">
            <label for="email">Email</label>
            <input class="input" id="email" type="email">
            <label for="password">Password</label>
            <input class="input" id="password" type="password">
            <div class="box">
                <div class="box2">
                    <input class="checkbox" id="checkbox" type="checkbox">
                    <label for="checkbox">ログイン を保持する</label>
                </div>
                <button class="button1">新規登入</button>
            </div>

            <RouterLink type="button" class="button2"  to="/inquiry">ログイン</RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.all-area{
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-area{
    width: 350px;
}
.input{
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 0;
}
.box{
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .button1{
        border: 0;
        background-color: inherit;
    }
}
.box2{
    
    display: flex;
    justify-content: center;
    align-items: center;
    .checkbox{
    border: 0;
    width: 20px;height: 20px;
    }
    label{
        padding: 0 10px;
    }
}

label{
    padding-top: 10px;
    
}

.button2{
    display: block;
    border: 0;
    border-radius: 10px;
    background-color: #475467;
    color: white;
    text-align: center;
    width: 240px;
    padding: 10px 30px;
    margin: 30px auto;
    text-decoration: none;
    user-select: none;
}
</style>
