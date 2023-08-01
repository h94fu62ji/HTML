// 淺層拷貝 / 深層拷貝
// 電腦底層 / 硬體

// console.log(123)
// 轉換成
// 010001010101010101
// 電腦才能執行
const a = [
    {
        name:"Tom",
        age:18
    },
    {
        name:"Tim",
        age:28
    },
    {
        name:"Kevin",
        age:23
    },
]


// 深層拷貝
// 先把資料全部轉成JSON(字串)
// 再把資料傳回 Js 物件

const b = JSON.parse(JSON.stringify(a));
// 缺點:無法儲存函式

b[1].name = "Alin";
console.log("B物件");
console.log(b);
console.log("A物件");
console.log(a);

// 淺層拷貝 只針對第一層做拷貝

const c = [...a];
c[2].name = "Beef";
console.log("C物件");
console.log(c);
console.log("A物件");
console.log(a);

// 狀態管理工具 => 整個網站(全域)的狀態/變數
// Vuex 複雜、功能多 
// pinia => Vue 開發組其中一個仁開發的