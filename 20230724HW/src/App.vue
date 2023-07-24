`<script>
import Box from "./components/box.vue"
export default {
  components:{
    Box
  },
  data() {
    return {
      cityList : [],
      cityRist : [],
    }
  },
  mounted() {
    fetch(
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-3DD45B51-D5B1-404A-BB6F-CEB1369751B5"
  )
    .then((res) => res.json())
    .then((data) => {
      let datalist = data.records.location;
      let cityindex = [5,4,6,15,7,10,12,17];
      // console.log(datalist)
      for(let i = 0 ; i < 4 ; i++){
        this.cityList.push(
          {
            "city":datalist[cityindex[i]].locationName,
            "weather":datalist[cityindex[i]].weatherElement[0].time[0].parameter.parameterName,
            "tempMin":datalist[cityindex[i]].weatherElement[2].time[0].parameter.parameterName,
            "tempMax":datalist[cityindex[i]].weatherElement[4].time[0].parameter.parameterName,

          },
        )
      }
      for(let i = 4 ; i < 8 ; i++){
        this.cityRist.push(
          {
            "city":datalist[cityindex[i]].locationName,
            "weather":datalist[cityindex[i]].weatherElement[0].time[0].parameter.parameterName,
            "tempMin":datalist[cityindex[i]].weatherElement[2].time[0].parameter.parameterName,
            "tempMax":datalist[cityindex[i]].weatherElement[4].time[0].parameter.parameterName,

          },
        )
      }
    });
  },
}

</script>

<template>
  <div class="all-area">
    <div class="area">
      <Box v-for="item in cityList" :city="item.city" :weather="item.weather" :tempMax="item.tempMax" :tempMin="item.tempMin"/>
    </div>
    <div class="photo"></div>
    <div class="area">
      <Box v-for="item in cityRist" :city="item.city" :weather="item.weather" :tempMax="item.tempMax" :tempMin="item.tempMin"/>
    </div>

  </div>

</template>

<style  scoped>
.all-area{
  width: 100vw;height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo{
  background-image: url(../public/資產1.svg);
  width: 40vw;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
