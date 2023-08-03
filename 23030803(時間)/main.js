// 建立物件
today = new Date()
// 月份列表
const months = "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(",")
const week = "星期日,星期一,星期二,星期三,星期四,星期五,星期六".split(",")
console.log(week)
//現在時間
console.log("現在時間 ",[today.getFullYear(),(today.getMonth()+1),today.getDate()].join("/"), [today.getHours(),today.getMinutes(),today.getSeconds()].join(":"))

// let date = moment().format();

// console.log(date)