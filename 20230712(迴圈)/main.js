inputEl = document.getElementById("input1")
butEl = document.getElementById("but1")
lenEl = document.getElementById("len")
forEl = document.getElementById("for")

butEl.addEventListener("click",function(){
    
    start = 0
    count = inputEl.value
    l = []
    for (j = start ; j <= count ; j++ ){
        y = 0
        for(i = 1 ; i <= j ; i++){
            if( j % i == 0){
                y++
            }
        }
        if(y == 2){
            l.push(j)
        } 
    }


    lenEl.innerText = l.length
    // ls = ""
    // l.forEach(item => {
    //     ls += item + "\t"
    // });
    forEl.innerText = l.join("  ")
})

map = new Map()
map.set(22,"HI")
map.set(0,"G")

console.log(map)
console.log(map.get(0))



map1 = {}
map1[0] =1

console.log(map1)
console.log(map1[0])