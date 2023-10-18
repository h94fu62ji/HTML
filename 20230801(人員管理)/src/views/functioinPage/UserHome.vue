<script>
import { mapActions, mapState } from 'pinia'
import indexStore from '../../store/Store'
export default {
    data() {
        return {
            userData: {},
        }
    },
    mounted() {
        this.getName()
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore, ['URL']),
    },
    methods: {
        getName() {
            fetch(this.URL + "find_by_id", {
                credentials: 'include',
            })
                .then(res => res.json()) // 回傳資料轉成可讀取
                .then(data => {
                    // console.log(data)
                    if (data.code == "200") {
                        this.userData = data.userInfo
                    }
                })
                .catch(error => {
                    console.error("Error:", error)
                });
        },
    }
}
</script>
<template>
    <div class="w-full color3 mt-20">
        <h1 class="text-3xl p-10">歡迎 {{ userData.name }}</h1>
        <h1 class="text-3xl p-10">工號 {{ userData.id }}</h1>
    </div>
</template>
<style></style>