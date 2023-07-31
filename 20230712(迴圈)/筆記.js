class Phone {
    constructor(brand , year, water ){
        this.brand = brand
        this.year = year
        this.water = water
    }
    phone_age() {
        return 2023 - this.year
    }
}

phone1 = new Phone("apple" , 2010 ,true)
phone2 = new Phone("sony", 2020 ,false)
console.log(phone1.phone_age())




arr = [8,6,17,10,55,31]
// length 長度
arr0 = arr.length
console.log(arr0)



// forEach 照順序印出來 順序0開始 全部
arr.forEach(function(xx,yy,zz){
    console.log(xx,yy,zz)
})

// 會把 ture 的值返回 
arr2 = arr.filter(function(item){
    return (item <= 3)
})
console.log(arr2)
// 每一個拿出來 再存回裡面
arr3 = arr.map(function(item){
    return item*2
})
console.log(arr3)
// 累加器 當前值 預設值
arr4 = arr.reduce(function(sum,item){
    return sum + item
},100)
console.log(arr4)



