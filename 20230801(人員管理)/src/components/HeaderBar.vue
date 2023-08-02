<script>
export default {
    
}
</script>


<template>
    <div class="h-12 w-screen bg-blue-400">
        <div class="h-12 area flex justify-between items-center">
            <router-link to="/" class="h-10 w-24 bg-white"></router-link>
            <h1 class=" text-3xl font-bold underline">
            TEST</h1>
            <div>
                <router-link to="/login" class="text-xl pl-4">登入</router-link>
                <router-link to="/check" class="text-xl pl-4">簽到</router-link>
            </div>
        </div>
    </div>
</template>


<style scoped>
    
</style>