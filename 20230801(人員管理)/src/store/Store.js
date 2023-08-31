// 狀態資料庫
import moment from "moment/moment";
import { defineStore } from "pinia";

// 兩個參數 資料庫名稱 資料庫內容
export default defineStore("userData",{
    // data 資料
    state:() => ({
        login : false,
        user : {
            ID : 'PK20230801',
            PASSWORD : '277966',
            UNIT : '502',
            LEVEL : 20,
            USE : true,
            data : {
                name : '蔡孟錤',
                email : 'h94fu62ji@gmail.com',
                born : '1998-08-29',
                in : '2023-08-01',
                working : true,
                out : '',
                money : '36000',
                bonus : '5000',
            },
            verifyCode : "",
            bill : {},
        },
        // 時間區
        today : moment().format('YYYY/MM/DD hh:mm:ss'),
        // 彈出視窗
        popwindow : false,


        // CSS區
        labelArea : ['w-24','text-sb'],
        label : ['m-4','flex','items-center'],
        input : ['text-center','mx-4','w-full','py-2','rounded-lg'],
        dataList : ['flex','items-center','justify-between'],
    }),
    // computed 顯示在畫面上的臨時變數
    getters: {
        userName: (state) => state.user.data.name,
    },
    // methods 方法
    actions: {
        getName() {
            console.log(this.user.data.name);
        },
        setName(x) {
            if(x != "" || x != null){
                this.user.data.name = x;
            }
        },
        getNewTime(){
            this.today = moment().format('YYYY/MM/DD hh:mm:ss')
            setTimeout(() => {
                this.getNewTime()
            }, 1000);
        },
        switchPop(){
            this.popwindow = !this.popwindow
        },
        switchLogin(){
            this.login = !this.login
        },
    }

});