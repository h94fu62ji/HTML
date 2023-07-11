const inputEl = document.getElementById("Celsius");

const btnEl = document.getElementById("submit")
//按鈕增加監聽器
btnEl.addEventListener("click",function(){
    // console.log(inputEl.value)
    Fahrenheit = inputEl.value * 9 / 5 + 32
    document.write("攝氏"+Fahrenheit+"度")
});


a = 1
console.log(a)