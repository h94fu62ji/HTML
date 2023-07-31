<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            account : "",
            password : "",
            mailWarn : false,
            passWarn : false,
            apWarn : false,
        }
    },
    mounted(){
        localStorage.setItem("user","0000")
        // console.log(localStorage.getItem("user"))
    },
    methods:{
        checkPass(){
            this.mailWarn = false;
            this.passWarn = false;
            this.apWarn = false;
            let i = 0;
            if(this.account == "" || this.account == null){
                this.mailWarn = true;
                i++;
            }
            if(this.password == "" || this.password == null){
                this.passWarn = true;
                i++;
            }
            if(i == 0 && this.password != localStorage.getItem(this.account)){
                this.apWarn = true;
            }
            else if(this.password == localStorage.getItem(this.account)){
                this.$router.push("/home");
            }
            if(i == 0 && this.password != sessionStorage.getItem(this.account)){
                this.apWarn = true;
            }
            else if(this.password == sessionStorage.getItem(this.account)){
                this.$router.push("/home");
            }

        }
    },

}

</script>

<template>
    <div class="all-area">
        <div class="main-area">
            <h1>Expense Tracker</h1>
            <div class="input-area">
                <label for="Account">Account</label>
                <label v-if="mailWarn" class="warn">please enter account</label>
                <input type="email" id="Account" v-model="account">
            </div>
            <div class="input-area">
                <label for="Password">Password</label>
                <label v-if="passWarn" class="warn">please enter password</label>
                <input type="password" id="Password" v-model="password">
            </div>

            <p class="apwarn" v-if="apWarn">account or password incorrect</p>

            <div class="but-area">
                <RouterLink class="button color1" to="/signup">Sign Up</RouterLink>
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
}
h1{
    text-align: center;
    color: #3C7FA5;
    font-size: 2.5rem;
}
.input-area{
    width: 350px;
    margin-top: 20px;
    position: relative;
    label{
        color: #AFB1B6;
    }
    .warn{
    color: red;
    font-size: .5rem;
    position: absolute;
    top: 2px;right: 0;
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
        cursor: pointer;
        user-select: none;
    }
    .color1{
        background-color: #A1B9C7;
    }
    .color2{
        background-color: #3C7FA5;
    }
}
.apwarn{
    color: red;
    font-size: 0.5rem;
    padding-top: 10px;
}

</style>