// Local Storage
// Session Storage
// 瀏覽器內的記憶體

// Session Storage:
// 網頁關閉 => 資料消失

// Local Storage:
// 網頁關閉 => 資料會留著

// key: Vaule 
sessionStorage.setItem("key","vaule")

// key => Value
Ia = sessionStorage.getItem("key")
console.log(Ia)

obj = {
    age : 18,
    name : "happy"
}
// 將物件轉成JSON格式
sessionStorage.setItem("obj",JSON.stringify(obj))
// parse 將字串轉物件
Is = JSON.parse(sessionStorage.getItem("obj"))
console.log(Is)




// 圖片串流
const inputEl = document.getElementById("io")
const imgEl = document.getElementById("img")

inputEl.addEventListener("change" , (e) => {
    // 上傳資料
    console.log(e.target.files[0]);
    const file = e.target.files[0]; 
    // 建立資料讀取器
    const reader = new FileReader();
    // 使用 FileReader 提供的方法讀取圖片
    // 非同步方法
    reader.readAsDataURL(file);

    // FileReader 當他讀完圖片之後，一定會執行 onload 方法
    reader.onload = (e) => {
        console.log("圖片讀取完成")
        console.log(e.target.result)
        // base64 編碼格式圖片
        imgEl.src = e.target.result
    }
})