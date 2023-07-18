<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from "./components/Header.vue";

export default{
  components:{
    HeaderView
  }
}

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
