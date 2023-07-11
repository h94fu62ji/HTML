input = Math.round(Math.random()*23+35)
console.log("本週工作共"+input+"小時")
if(input <40) {
    input *= 0.8
}
else if(input == 40){
}
else if(input > 40 & input <= 50){
    input *= 1.2
}
else{
    input *= 1.6
}
input = Math.round(input * 150) //計算薪資
console.log("本週薪水"+input+"元")


