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
      trimText: ""
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

</template>