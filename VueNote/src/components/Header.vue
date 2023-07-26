<script>
// vue-router 處理網址
import { RouterLink ,RouterView } from 'vue-router'
// Pinia 方法
import { mapState , mapActions } from 'pinia';
import indexStatus from '../store/indexStatus';
// 預設輸出
export default {
    data() {
        return {
            
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStatus,["location","locationInfo"])
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStatus,["getLocation"])
    },
    mounted() {
        // console.log(this.location);
        // console.log(this.locationInfo);      
        this.getLocation() 
    },
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
        
        <p>{{ locationInfo }}</p>

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
    color: #FFF;
    user-select: none;
}
</style>

