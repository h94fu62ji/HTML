<script>
import{ RouterLink ,RouterView } from "vue-router"
export default {
}
</script>
<template>
    <h1>Vue-router</h1>
    <RouterLink class="link" to="/vue-router/com-c">元件C</RouterLink>
    <RouterLink class="link" to="/vue-router/com-d">元件D</RouterLink>
    <RouterView style="margin: 30px auto;"/>
    
</template>
<style lang="scss" scoped>
.link{
    padding: 10px;
}
</style>