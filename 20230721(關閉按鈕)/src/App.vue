<script>
import Modal from "./components/Modal.vue"
export default {
  components:{
    Modal
  },
  data() {
    return {
      isShow: false,
      isShow2: false,
      isShow3: false,
    }
  },
  methods: {
    switchModal() {
      this.isShow = !this.isShow
    },
    switchModal2() {
      this.isShow2 = !this.isShow2
    },
    switchModal3() {
      this.isShow3 = !this.isShow3
    },
  },
}

</script>

<template>
    <div class="w-screen h-screen flex justify-center items-center ">

      <button @click="switchModal" type="button" class="select-none text-center text-5xl bg-gradient-to-r from-cyan-300 to-blue-500 h-40 px-12 mx-5 cursor-pointer hover:scale-105 active:scale-95 duration-300 text-white font-bold rounded-3xl ">Vue3 + Tailwind</button>

      <button @click="switchModal2" type="button" class="select-none text-center text-5xl bg-gradient-to-r from-cyan-300 to-blue-500 h-40 px-12 mx-5 cursor-pointer hover:scale-105 active:scale-95 duration-300 text-white font-bold rounded-3xl ">Click</button>
      
      <button @click="switchModal3" type="button" class="select-none text-center text-5xl bg-gradient-to-r from-cyan-300 to-blue-500 h-40 px-12 mx-5 cursor-pointer hover:scale-105 active:scale-95 duration-300 text-white font-bold rounded-3xl ">Click</button>
    
    </div>

  <Modal :title="'外來的標題'" :text="'外來的內文'" v-if="isShow" @push="switchModal"/>
  <Modal :title="'^^'" :text="'Hello EveryMeow'" v-if="isShow2" @push="switchModal2"/>
  <Modal :title="'^甘^'" :text="'驢子'" v-if="isShow3" @push="switchModal3">
    <img style="margin: 0 auto;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53-E2wq5bZdjID0SpVoxJTIrLZQjiemOnSIavNV1tAw&s" alt="">
  </Modal>
</template>

<style scoped>

</style>
