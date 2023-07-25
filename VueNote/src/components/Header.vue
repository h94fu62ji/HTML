<script>
// vue-router 處理網址
import { RouterLink ,RouterView } from 'vue-router'
// 預設輸出
export default {

}
</script>

<template>

    <header>
        <!-- 網址 /代表首頁 -->
        <RouterLink class="link" to="/">V-model</RouterLink>
        <RouterLink class="link" to="/V-text">V-text</RouterLink>
        <RouterLink class="link" to="/V-for">V-for</RouterLink>
        <RouterLink class="link" to="/V-if&V-show">V-if & V-show</RouterLink>
        <RouterLink class="link" to="/V-bind">V-bind</RouterLink>
        <RouterLink class="link" to="/V-on">V-on</RouterLink>
        <RouterLink class="link" to="/Props">Props</RouterLink>
        <RouterLink class="link" to="/Emit">Emit</RouterLink>
        <RouterLink class="link" to="/Provide&Inject">Provide & Inject</RouterLink>
        <RouterLink class="link" to="/Watch&Computed">Watch & Computed</RouterLink>
        <RouterLink class="link" to="/Vue-router">Vue-router</RouterLink>
        <RouterLink class="link" to="/Router-push">Router-push</RouterLink>
        <RouterLink class="link" to="/File-reader">Fire-reader</RouterLink>

    </header>

</template>


<style lang="scss" scoped>
header{
    widows: 100%;
    background-color: #17b782;
    font-size: 1.5rem;
    padding: 2rem 3rem;
}
.link{
    margin: 0 .5rem;
    text-decoration: none;
    &:hover{
        scale: 1.02;
    }
    &:active{
        scale: .98;
    }
}
</style>

