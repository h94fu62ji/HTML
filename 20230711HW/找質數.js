

// 從十開始
// 後20個
// 找質數

start = 10
count = 20
x = 1
l = []
for (j = start ; x <= count ; j++ ){
    if (j == 1){
        l.push(1)
    }
    y = 0
    for(i = 1 ; i <= j ; i++){
        if( j % i == 0){
            y++
        }
    }
    if(y == 2){
        l.push(j)
        x++
    } 
}

console.log(l)
