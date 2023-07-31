<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            account : "",
            password : "",
            rpassword : "",
            mailWarn : false,
            passWarn : false,
            rpassWarn : false,
            haveAccount : false,
            rpWarn : false,
        }
    },
    methods:{
        checkPass(){
            this.mailWarn = false;
            this.passWarn = false;
            this.rpassWarn = false;
            this.haveAccount = false;
            this.rpWarn = false;
            let i = 0;
            if(this.account == "" || this.account == null){
                this.mailWarn = true;
                i++;
            }
            if(this.password == "" || this.password == null){
                this.passWarn = true;
                i++;
            }
            if(this.rpassword == "" || this.rpassword == null){
                this.rpassWarn = true;
                i++;
            }
            else if(this.password != this.rpassword){
                this.rpWarn = true;
                i++
            }
            if(localStorage.getItem(this.account) != null || sessionStorage.getItem(this.account) != null){
                this.haveAccount = true;
                i++;
            }
            if(i == 0){
                sessionStorage.setItem(this.account,this.password)
                this.$router.push('/home')
            }
        }
    },
}
</script>

<template>
    <div class="all-area">
        <div class="main-area">
            <h1>Sign Up</h1>
            <div class="input-area">
                <label for="Account" >Account</label>
                <label v-if="mailWarn" class="warn">please enter account</label>
                <label v-if="haveAccount" class="warn">account already exists</label>
                <input type="email" id="Account" v-model="account">
            </div>
            <div class="input-area">
                <label for="Password">Password</label>
                <label v-if="passWarn" class="warn">please enter password</label>
                <input type="password" id="Password" v-model="password">
            </div>
            <div class="input-area">
                <label for="RPassword"> repeat Password</label>
                <label v-if="rpassWarn" class="warn">please enter repeat password</label>
                <label v-if="rpWarn" class="warn">repeat password failed</label>
                <input type="password" id="RPassword" v-model="rpassword">
            </div>
            <div class="but-area">
                <RouterLink class="button color1" to="/">Cancel</RouterLink>
                <button type="button" class="button color2" @click="checkPass">Log In</button>
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
    background-color: #3C7FA5;
}
h1{
    text-align: center;
    color: #FFF;
    font-size: 2.5rem;
}
.input-area{
    width: 350px;
    margin-top: 20px;
    position: relative;
    label{
        color: #FFF;
    }
    .warn{
    color: rgb(255, 180, 180);
    font-size: .5rem;
    position: absolute;
    top: 2px;right: 0;
    }
    input{
        width: 100%;
        height: 2rem;
        padding-left: 10px;
        border-radius: 10px;
        border: 1px solid #FFF;
        color: #FFF;
        background-color: #3C7FA5;
        &:focus{
            background-color: #4ba0d1;
            border: 1px solid #FFF;
        }
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
        cursor: pointer;
        user-select: none;
    }
    .color1{
        background-color: #A1B9C7;
    }
    .color2{
        background-color: #FFF;
        color: #3C7FA5;
    }
}
</style>