<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from "./components/HeaderBar.vue"
import FunctionBar from "./components/FunctionBar.vue"
</script>


<template>
  <HeaderBar/>
  <div class="h-12 w-screen"></div>
  <RouterView/>
</template>



<style scoped>

</style>
