inputEl = document.getElementById("input1")
butEl = document.getElementById("but1")
startEl = document.getElementById("start")
endEl = document.getElementById("end")
stopEl = document.getElementById("stop")
titEl = document.getElementById("tit")

start = 1
end = 100
ans = Math.round(Math.random()*99+1)
console.log(ans)
startEl.innerText = start
endEl.innerText = end


butEl.addEventListener("click",function(){
    inv = inputEl.value
    if ( inv >= end | inv <= start){

    }
    else if ( inv < ans ){
        start = inv
    }
    else if ( inv > ans ){
        end = inv
    }
    else if ( inv == ans ){
        titEl.innerText = "答對了"
        stopEl.innerText = ans
        start = ""
        end = ""
    }

    startEl.innerText = start
    endEl.innerText = end
})
