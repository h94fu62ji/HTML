//API
fetch(
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-3DD45B51-D5B1-404A-BB6F-CEB1369751B5"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.records.location);
      weather = data.records.location;
});

const elements = {};

for (let i = 1; i <= 8; i++) {
  elements[`wea${i}El`] = document.getElementById(`wea${i}`);
  elements[`temp${i}El`] = document.getElementById(`temp${i}`);
}

city = [5, 11, 6, 15, 7, 10, 12, 17]

function text(x,y){
    //天氣狀態
    weather_now = weather[y].weatherElement[0].time[0].parameter.parameterName;
    elements[`wea${x}El`].innerText = weather_now

    //溫度
    tempMax = weather[y].weatherElement[4].time[0].parameter.parameterName;
    tempMin = weather[y].weatherElement[2].time[0].parameter.parameterName;
    elements[`temp${x}El`].innerText = tempMin + " ~ " + tempMax + "°C";
  
}

for (let i = 1; i <= 8; i++) {
    setTimeout(`text(${i},city[${i-1}])`, 500);
}

