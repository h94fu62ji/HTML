// 狀態資料庫
import { defineStore } from "pinia";

// 兩個參數 資料庫名稱 資料庫內容
export default defineStore("indexStatus",{
    // data
    state:() => ({
        location: 10
    }),
    // computed
    getters: {
        locationInfo: (state) => `現在的位置是:${state.location}`
    },
    // methods
    actions: {
        getLocation() {
            console.log(this.location);
        },
        setLocation(num) {
            this.location = num;
        }
    }

});