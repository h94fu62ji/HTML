<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from "./components/Header.vue"
import FooterView from "./components/Footer.vue"
import RightBar from "./components/RightBar.vue"
</script>

<template>
  <div class="body">
    <HeaderView/>
    <div class="area">
      <RouterView/>
      <RightBar/>
    </div>
    
    <FooterView/>
  </div>
  
</template>

<style lang="scss" scoped>
.area{
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}

</style>
