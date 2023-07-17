<script setup>
import Com1 from "./components/Component1.vue"
</script>



<template>
<div class="container">
  <h1>App.vue 底層元件</h1>
  <h2>App.vue H2</h2>
  <Com1></Com1>
</div>
</template>



<style scoped>
.container{
  border: 2px solid black;
}
h2{
  font-size: 2rem;
  color: red;
}
</style>
