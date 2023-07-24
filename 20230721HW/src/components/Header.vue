<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    
}
</script>

<template>
    <div class="header">
        <div class="header-area">
            <router-link class="logo link" to="/"></router-link>
            <div class="box">
                <router-link class="link" to="/會社案內">会社案內</router-link>
                <p>丨</p>
                <router-link class="link" to="/店鋪">店鋪. アクセス</router-link>
            </div>
            <div class="box">010-123456789</div>

            <div class="box color1">
                <router-link class="link color1" to="/login">ログイン</router-link>
                <p>丨</p>
                <router-link class="link color1" to="/inquiry">
                お問い合わせ</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>


.header{
    width: 100vw;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-area{
    width: 750px;
    display: flex;
    align-items: end;
    justify-content: space-between;
}
.logo{
    display: block;
    width: 75px;height: 75px;
    background-color: #475467;
;
}
.link{
    text-decoration: none;
    color: black;
    user-select: none;
}
.box{
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
}
.color1{
    background-color: #475467;
    color: white;
}
p{
    margin: 0;
    user-select: none;
}
</style>