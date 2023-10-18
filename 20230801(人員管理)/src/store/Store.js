// 狀態資料庫
import moment from "moment/moment";
import { defineStore } from "pinia";

// 兩個參數 資料庫名稱 資料庫內容
export default defineStore("userData",{
    // data 資料
    state:() => ({
        login : false,
        // user : {
        //     verifyCode : "",
        //     bill : {},
        // },
        URL: "http://localhost:8080/",
        // 彈出視窗
        popwindow : false,


        // CSS區
        labelArea : ['w-24','text-sb'],
        label : ['m-4','flex','items-center'],
        input : ['text-center','mx-4','w-full','pr-2','rounded-lg'],
        input2 : ['text-center','mx-4','w-full','pr-10','rounded-lg'],
        dataList : ['flex','items-center','justify-between'],
    }),
    // computed 顯示在畫面上的臨時變數
    getters: {
    },
    // methods 方法
    actions: {
        switchPop(){
            this.popwindow = !this.popwindow
        },
        switchToLogin(){
            this.login = true
        },
        switchToLogout(){
            this.login = false
        },
    }

});