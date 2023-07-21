<script>

export default{
  // 導入元件的列表
  // components
  // data:function(){}
  // ES6 語法糖
  // Vue 規則

  data(){
    return{
      text: "Hello everymeow!!!",
      num: null,
      lazyText: "",
      trimText: "",
      meal:[],
      radioMeal: null,
      
    }
  }
}

</script>

<template>

  <h1>V-model</h1>
  <p>{{ text }}</p>
  <input v-model="text" type="text">
  
  <h2>V-model.number</h2>
  <p>{{ num }}</p>
  <input v-model.number="num" type="number">

  <h2>V-model.lazy</h2>
  <p>{{ lazyText }}</p>
  <input v-model.lazy="lazyText" type="text" />

  <h2>V-model.trim</h2>
  <p>{{ trimText }}</p>
  <input v-model.trim="trimText" type="text" />

  <h2>Checkbox</h2>
  <!-- 多選 -->
  <div>
    <input type="checkbox" name="meal" value="早餐" v-model="meal" id="breakfast">
    <label for="breakfast">早餐</label>

    <input type="checkbox" name="meal" value="中餐" v-model="meal" id="lunch">
    <label for="lunch">中餐</label>

    <input type="checkbox" name="meal" value="晚餐" v-model="meal" id="dinner">
    <label for="dinner">晚餐</label>
  </div>
  <p>{{ meal }}</p>


  <h2>Radio</h2>
  <!-- 單選 -->
  <div>
    <input type="radio" id="breakfast2" name="radioMeal" value="早餐" v-model="radioMeal">
    <label for="breakfast2">早餐</label>
    <input type="radio" id="lunch2" name="radioMeal" value="午餐" v-model="radioMeal">
    <label for="lunch2">午餐</label>
    <input type="radio" id="dinner2" name="radioMeal" value="晚餐" v-model="radioMeal">
    <label for="dinner2">晚餐</label>
  </div>
  


</template>