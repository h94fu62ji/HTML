iptEl1 = document.getElementById("ipt1")
iptEl2 = document.getElementById("ipt2")

btnEl1 = document.getElementById("btn1")
btnEl2 = document.getElementById("btn2")
btnEl3 = document.getElementById("btn3")
btnEl4 = document.getElementById("btn4")

spanEl1 = document.getElementById("span1")

btnEl1.addEventListener("click",function(){
    spanEl1.innerText = +iptEl1.value + +iptEl2.value
})
btnEl2.addEventListener("click",function(){
    spanEl1.innerText = +iptEl1.value - +iptEl2.value
})
btnEl3.addEventListener("click",function(){
    spanEl1.innerText = +iptEl1.value * +iptEl2.value
})
btnEl4.addEventListener("click",function(){
    spanEl1.innerText = +iptEl1.value / +iptEl2.value
})