// 狀態資料庫
import { defineStore } from "pinia";

// 兩個參數 資料庫名稱 資料庫內容
export default defineStore("userData",{
    // data 資料
    state:() => ({
        user : {
            ID : 'PK20230801',
            PASSWORD : '277966',
            UNIT : '501',
            LEVEL : 20,
            USE : true,
            data : {
                name : '蔡孟錤',
                email : 'h94fu62ji@gmail.com',
                born : '19980829',
                in : '20230801',
                working : true,
                out : '',
                money : '36000',
                bonus : '5000',
            },
            verifyCode : "",
            bill : {},
        }
    }),
    // computed 顯示在畫面上的臨時變數
    getters: {
        userName: (state) => state.user.data.name
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
        }
    }

});