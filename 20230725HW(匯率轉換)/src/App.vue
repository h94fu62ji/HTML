<script>
import Small from "./components/Small.vue"
export default {
  components:{
    Small
  },
  data() {
    return {
      time : "",
      small : true,
      inputValue : null,
      outputValue : null,
      countryIn : "USD",
      countryOut : "USD",
      dataListGet : {},
      country : [
        {name:"美元(USD)",value:"USD"},
        {name:"台幣(TWD)",value:"TWD"},
        {name:"人民幣(CNY)",value:"CNY"},
        {name:"歐元(EUR)",value:"EUR"},
        {name:"英鎊(GBP)",value:"GBP"},
        {name:"日元(JPY)",value:"JPY"},
      ],

    }
  },
    mounted() {
    fetch('https://v6.exchangerate-api.com/v6/ec0528d966249633dc047f7e/latest/USD')
      .then(res => res.json())
      .then(data => {
        const list = ["USD","TWD","CNY","EUR","GBP","JPY"];
        const dataList = data.conversion_rates;
        console.log(data.time_last_update_utc);
        for(let i = 0 ; i < list.length ; i++){
          // console.log(list[i])
          this.dataListGet[list[i]] = dataList[list[i]]

        }
        this.time = data.time_last_update_utc


        
      });
      
      // toFixed(4)
  },
  methods:{
    changeOut(){
      // 轉成美金 取小數點四位
      let UsaValue = this.inputValue / this.dataListGet[this.countryIn]
      // 轉成目標值
      this.outputValue = (UsaValue * this.dataListGet[this.countryOut]).toFixed(4)*1000/1000
    },
    changeCountry(){
      // 幣值顛倒
      let x = this.countryIn
      this.countryIn = this.countryOut
      this.countryOut = x
      this.changeOut()
    },
    changeSmall(){
      // 小角落
      this.small = !this.small
    }
  },
}

</script>

<template>
  <div class="all-area">
    <div class="click" @click="changeSmall"></div> 
    <Small v-show="small"></Small>
    <h1>匯率轉換器</h1>
    <div class="changeArea">
      <div class="box">
        <input type="number" min="0" v-model="inputValue">
        <select v-model="countryIn" class="choese">
          <option v-for="item in country" :value="item.value">{{ item.name }}</option>
        </select>
      </div>
      <div class="box1">
        <button @click="changeOut" type="button">換 算</button>
        <button @click="changeCountry" type="button">交 換</button>
      </div>
      <div class="box">
        <input readonly="readonly" type="number" min="0" v-model="outputValue">
        <select v-model="countryOut" class="choese" >
          <option v-for="item in country" :value="item.value">{{ item.name }}</option>
        </select>
      </div>
    </div>

    <h2>更新日期：{{ time.substr(4, 12) }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.all-area{
  background-color: #fff;
  padding: 0 30px 30px 30px;
  border: 2px solid black;
  text-align: center;
  position: relative;
  h1{
    padding: 30px;
    color: #508478;
  }
  h2{
    padding-top: 20px;
  }
}
.click{
  width: 75px;height: 75px;
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  z-index: 10;
}
.box1{
  display: flex;
  justify-content: space-between;
}
.box{
  display: flex;
  justify-content: space-between;
  border: 2px black solid;
  border-radius: 10px;
  input,.choese{
    width: 50%;height: 40px;
    border: 0;
    font-size: 1.1rem;

  }
  input{
    border-radius: 10px 0 0 10px;
    padding-left: 10px;
  }
  .choese{
    border-radius: 0 10px 10px 0;
  }
}
button{
  margin: 10px ;
  font-size: 1.5rem;
  padding: 0 50px;
  background-color: #5b998b;
  border: 0;
  border-radius: 10px;
  color: #fff;
}

</style>
