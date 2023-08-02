<script>
export default {
    
}
</script>


<template>
    <div class="fixed top-0 right-0">
        <div class="h-12 w-screen color1 shadow-xl">
            <div class="h-12 all-area flex justify-between items-center">
                <router-link to="/" class="h-10 w-24 bg-white"></router-link>
                <div>
                    <router-link to="/login" class="text-xl pl-4">登入</router-link>
                    <router-link to="/check" class="text-xl pl-4">簽到</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.d{
    position: fixed;
}
</style>