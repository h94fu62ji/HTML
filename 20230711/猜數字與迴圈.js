
// number = 25
// start = 1
// end = 100
// document.write("猜數字 範圍 " + start + "~" + end)

// while (input != number) {
//     input = prompt("猜數字") 
//     if (input < start | input > end){
//         document.write("請輸入範圍內的數字 範圍 "+ start + "~" + end)
//         alert
//     }
//     else if (input < number){
//         start = input
//         document.write("輸入錯誤 範圍 "+ start + "~" + end)
//     }
//     else if (input > number){
//         end = input
//         document.write("輸入錯誤 範圍 "+ start + "~" + end)
//     }  
// }

// document.write("猜對了 你的數字是" + number)

// input = document.getElementById("input")
// btn = document.getElementById("chick")
// btn = addEventListener("chick",function(){running = false})
// running = true
// while (running & input == 20){
//     console.log(input)
// }


// for (i = 1; i <= 9; i++){
//     for (j = 1; j <= i; j++){
//         console.log(i+"*"+j+"="+i*j)
//     }
// }



for (i = 1; i <= 5; i++){
    x = ""
    for (j = 1; j <= i; j++){
        x += " " + j
    }
    console.log(x)
}

console.log("--------------------------")
for (i = 5; i >= 1; i--){
    x = ""
    for (j = 1; j <= i; j++){
        x += " " + j
    }
    console.log(x)
}

console.log("--------------------------")
y = "1 2 3 4 5"
for (i = 1; i <= 9; i+=2){
    console.log(y.substring(0,i))
}

console.log("--------------------------")
y = "1 2 3 4 5"
for (i = 9; i >= 1; i-=2){
    console.log(y.substring(0,i))
}

console.log("--------------------------")
function add (x,y) {
    x += y
    return x
}
console.log(add(3,5))
console.log("--------------------------")
x = ["小明","小天","小王"]

x.forEach((element) => console.log(element));

