<script>
export default {

}
</script>


<template>
    <div class="w-40 py-4 px-8 color5">
        <div>
            <router-link to="/function/" class="link">會員中心</router-link>
            <router-link to="/function/userset" class="link2">基本資料</router-link>
            <router-link to="/function/userleave" class="link2">請假申請</router-link>
            <router-link to="/function/userdata" class="link2">資料查詢</router-link>
        </div>
        <div class="pt-3">
            <!-- <router-link to="/function/staffmenu" class="link">人員管理</router-link> -->
            <h1 class="link">人員管理</h1>
            <router-link to="/function/staffapprove" class="link2">假單批准</router-link>
            <router-link to="/function/staffadd" class="link2">新增成員</router-link>
            <router-link to="/function/staffset" class="link2">人資異動</router-link>
            <router-link to="/function/staffmoney" class="link2">薪資調整</router-link>
        </div>
    </div>
</template>


<style scoped>
.link {
    display: block;
    margin: 10px 0;
    font-weight: bolder;
}

.link2 {
    display: block;
    margin: 5px 0 5px 20px;
}
</style>