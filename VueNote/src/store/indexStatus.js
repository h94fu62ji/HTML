// 狀態資料庫
import { defineStore } from "pinia";

// 兩個參數 資料庫名稱 資料庫內容
export default defineStore("indexStatus",{
    // data 資料
    state:() => ({
        location: 10
    }),
    // computed 顯示在畫面上的臨時變數
    getters: {
        locationInfo: (state) => `現在的位置是:${state.location}`
    },
    // methods 方法
    actions: {
        getLocation() {
            console.log(this.location);
        },
        setLocation(num) {
            this.location = num;
        }
    }

});