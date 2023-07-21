<script>
export default{
  data() {
    return {
      ans : Math.floor(Math.random()*100),
      start : 1,
      end : 100,
      num : null,
      pass : false,
    }
  },
  //方法
  methods: {
    
    numUpdate(x){
      if (x >= this.end || x <= this.start){
        console.log("超出範圍")
      }
      else if (x < this.ans){
        this.start = x
      }
      else if (x > this.ans){
        this.end = x
      }
      else{
        console.log("恭喜答對")
        this.pass = true
      }
      this.num = null
      console.log("點擊")
    },
    call(){
      console.log("點擊")
    }
  }
}
</script>

<template>
  <div class="area">
    <h1>猜一個數字</h1>

    <div class="view">
      <h1>{{ pass ? "" : start }}</h1>
      <h1>{{ pass ? ans + "回答正確" : "~" }}</h1>
      <h1>{{ pass ? "" : end }}</h1>
    </div>
    
    <input type="number" v-model.number="num">
    <button type="button" @click="numUpdate(num)">回 答</button>

  </div>
</template>

<style lang="scss" scoped>
.area{
  width: 500px;height: 600px;
  background-color: #fff;
  border-radius: 30px;
  text-align: center;
}
.view{
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
h1{
  padding-top: 60px;
  font-size: 4rem;
}
input{
  margin-top: 100px;
  height: 30px;
  width: 50%;
  border-radius: 10px;
}
button{
  display: block;
  background-color: gray;
  margin: 50px auto;
  padding: 10px 50px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-size: 1.2rem;
}
</style>