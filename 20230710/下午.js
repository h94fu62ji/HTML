

console.log(true && 1 && true);


console.log(true && false && true);


console.log(false | true | false);


console.log(true | false | true);
console.log("分隔線")
a = Math.round(Math.random()*3)
// if ( a == true ) {
//     console.log("HI")
// }
// else if ( a == false ) {
//     console.log("WHAT?")
// }
// else{
//     console.log("BEY")
// }


start =1
end = 101
l = []
for(j = start ; j <= end ; j++){
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
        // console.log(j)
        l.push(j)
    }
}
console.log(l)