<script>
import TitleArea from "./TitleArea.vue"
import MainArea from "./MainArea.vue"
export default {
  components:{
    TitleArea,
    MainArea,
  },
  data() {
    return {

    }
  },
  //方法
  methods: {
    
  }
}
</script>

<template>
  <div class="all-area">
    <TitleArea/>
    <MainArea/>
    
  </div>

</template>

<style lang="scss" scoped>
.all-area{
  width: 600px;

}
</style>
