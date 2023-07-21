<script>
// vue-router 處理網址
import { RouterLink ,RouterView } from 'vue-router'
// 預設輸出
export default {

}
</script>

<template>
    <header>
        <div class="area">
            <RouterLink style="margin-right: 30px;" to="/">
                <div class="logo"></div>
            </RouterLink>
            <RouterLink class="link" to="/">
                lorem
            </RouterLink>
            <RouterLink class="link" to="/">
                lorem
            </RouterLink>
            <RouterLink class="link" to="/">
                lorem
            </RouterLink>
            <RouterLink to="/login">
                <button>login</button>
            </RouterLink>
        </div>
        
    </header>
</template>

<style lang="scss" scoped>
header{
    width: 100vw;
    height: 100px;
    background-color: #C8Cd71;
    .area{
        width: 600px;height: 85%;
        display: flex;
        align-items: end;
        position: relative;
        margin: 0 auto;
    }
}
.logo{
    width: 120px;height: 70px;
    background-color: white;
}
.link{
    margin: 0 30px;
    text-decoration: none;
}
button{
    padding: 0.25rem 1rem;
    background-color: white;
    border-radius: 4px;
    border: 0;
    color: wheat;
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
}
</style>