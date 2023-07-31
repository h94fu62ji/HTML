<script>
export default {
  props:["title","text"],
  methods:{
    callOutSwitch(){
      this.$emit("push");
    }
  }
}
</script>

<template>
  
    <div class=" z-10 w-screen h-screen fixed top-0 left-0 flex justify-center items-center ">
      <div class=" w-screen h-screen bg-black opacity-70"></div>

      <div class="w-2/4 p-12 bg-white rounded-lg absolute text-center">
        <h2 class=" text-2xl  font-bold mb-4">{{ title }}</h2>
        <p>{{ text }}</p>
        <!-- SLOT -->
        <!-- 元件開一個孔 -->
        <!-- 這個孔可以給外部元件用 -->
        <slot></slot>
        <button @click="callOutSwitch" type="button" class="select-none bg-cyan-500 py-2 px-4 rounded-md font-bold text-white block mx-auto mt-4 cursor-pointer duration-200 
        hover:scale-105
        active:scale-95">Close</button>
      </div>
      
    </div>
</template>

<style lang="scss" scoped>
    
</style>