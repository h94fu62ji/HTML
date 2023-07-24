<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from "./components/Header.vue";



</script>
  


<template>
  <HeaderView/>
  <div class="container">
    <RouterView/>
  </div>
  
</template>



<style scoped>
.container{
  text-align: center;
}

</style>
