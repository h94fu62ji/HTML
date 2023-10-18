<script setup>
import header1 from "./components/Header1.vue"
import area1 from "./components/Area1.vue"
import area2 from "./components/Area2.vue"
import area3 from "./components/Area3.vue"
import area4 from "./components/Area4.vue"
import footer1 from "./components/Footer1.vue"


</script>
<script>
export default {
  data() {
    return {
      s: ["1", "2", "3"]
    }
  },
}
</script>

<template>
  <header1 />
  <area1 />
  <area2 />
  <div class="bl"></div>
  <area3 />
  <area4 />
  <footer1 />
  <select>
    <option v-for="(item, index) in s" :value="index">{{ item }}</option>
  </select>
</template>

<style lang="scss" scoped>
.bl {
  width: 600px;
  height: 1.75px;
  background-color: black;
  margin: 0 auto;
}
</style>
