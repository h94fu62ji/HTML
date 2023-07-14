
mealList = [
    {
        "name": "食在一方",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "日十",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "鹽行站",
        "category": ["buffet", "rice"],
        "filter": false
    },
    {
        "name": "鍋燒意麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "炒飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "八方雲集",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "火鍋",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "韓式料理",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "小飯糰大飯糰",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "後校門滷肉飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "魚耶",
        "category": ["brunch", "rice", "noodle"],
        "filter": false
    },
    {
        "name": "吳家鴨香飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "施家雞肉飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "黑盤",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "神武拉麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "森井丼飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "雙醬咖哩",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "麺や青鈴",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "金拱門",
        "category": ["noodle", "rice"],
        "filter": false
    }
]

butEl = document.getElementById("but")
butEl2 = document.getElementById("but1")
ansEl = document.getElementById("ans")
inputEl = document.getElementById("input")
in1El = document.getElementById("in1")
in2El = document.getElementById("in2")
in3El = document.getElementById("in3")
in4El = document.getElementById("in4")
in5El = document.getElementById("in5")

intc = ["brunch","rice","noodle","buffet","others"]

function Newmeal(item,category){
    x = {}
    x["name"] = item
    x["category"] = category
    mealList.push(x)
}




butEl.addEventListener("click",function(){
    

    int = [in1El,in2El,in3El,in4El,in5El]
    choese = []
    count = 0
    for (i = 0; i < int.length
         ; i++){
        if (int[i].checked){
            for (j = 0; j < mealList.length ; j++){
                if ( mealList[j].category.includes(intc[i]) ){
                    if(choese.includes(mealList[j].name)){
                    }
                    else{
                        choese.push(mealList[j].name)
                    }
                }
            }
            count++
        }
    }
    if(count == 0){
        mealList.forEach(function(item){
            choese.push(item.name)
        })
    }


    console.log(choese)

    randomNum =  Math.floor(Math.random() *choese.length)

    ansEl.innerText = choese[randomNum]

})


butEl2.addEventListener("click",function(){
    input = inputEl.value
    count = 0
    if(input.length <= 0){
        ansEl.innerText = "請輸入內容"
    }
    else{
        mealList.forEach(function(item){
            if(input == item.name){
                count++
            }
        })
        if(count > 0){
            ansEl.innerText = "新增失敗 已存在"
        }
        else{
            int = [in1El,in2El,in3El,in4El,in5El]
            add = []
            for (i = 0; i < int.length; i++){
                if (int[i].checked){
                    add.push(intc[i])
                }
            }
            Newmeal(inputEl.value,add)

            inputEl.value = ""

            ansEl.innerText = "新增成功"
        }
    }   
})