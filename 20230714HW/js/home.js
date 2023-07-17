//API
fetch(
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-3DD45B51-D5B1-404A-BB6F-CEB1369751B5"
)
  .then((res) => res.json())
  .then((data) => {
    //台南最高溫
    console.log(
      data.records.location[6].weatherElement[4].time[1].parameter.parameterName
    );
    //台南最低溫
    console.log(
      data.records.location[6].weatherElement[2].time[1].parameter.parameterName
    );
    console.log(data.records.location);

    weather = data.records.location;
    
    
  });

const ChoeseEl = document.getElementById("choese");
const timeEl = document.getElementById("time");
const cityEl = document.getElementById("city");
const weaEl = document.getElementById("wea");
const tempEl = document.getElementById("temp");
const ranEl = document.getElementById("ran");

setTimeout("choeseList()", 500);

function choeseList() {
  for (j = 0; j < weather.length; j++) {
    ChoeseEl.innerHTML += '<option value="' + weather[j].locationName + '">' + weather[j].locationName + "</option>";
  }
}

function timeList() {
  for (k = 0; k < 3; k++) {
    time = weather[0].weatherElement[0].time[k].startTime
    timeEl.innerHTML += '<option value="' + time + '">' + time + "</option>";
  }
}

//改文字
function changeText(x,y){
    //城市
    cityEl.innerText = weather[x].locationName;

    //天氣狀態
    weather_now = weather[x].weatherElement[0].time[y].parameter.parameterName;
    weaEl.innerText = weather_now;
  
    //溫度
    tempMax = weather[x].weatherElement[4].time[y].parameter.parameterName;
    tempMin = weather[x].weatherElement[2].time[y].parameter.parameterName;
    tempEl.innerText = tempMin + " ~ " + tempMax + "°C";
  
    //降雨機率
    ran_pc = weather[x].weatherElement[1].time[y].parameter.parameterName;
    ranEl.innerText = "降雨機率：" + ran_pc + "%";
}



var i = 0

ChoeseEl.addEventListener("click", () => {
  //清單歸零
  timeEl.innerHTML = ""
  var a = 0
  timeList()
  timeEl.addEventListener("click", () =>{
    
    //時間選擇
    for (var a = 0; a < 3; a++) {
      if (timeEl.value == weather[i].weatherElement[0].time[a].startTime) {
        // console.log(i)
        break;
      }
    }
    changeText(i,a)
  })

  //縣市選擇
  for (var i = 0; i < weather.length; i++) {
    if (ChoeseEl.value == weather[i].locationName) {
      // console.log(i)
      break;
    }
  }
  
  changeText(i,a)
});

