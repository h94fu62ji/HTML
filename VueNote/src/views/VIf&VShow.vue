<script>
export default{
    data() {
        return {
            car: false,
            house: 0,
            car2: false,
        }
    },
}

</script>


<template>
    <h1>V-if & V-show</h1>
    <div>
        <h2>V-if / v-else-if / v-else</h2>
        <input type="checkbox" id="car" v-model="car">
        <label for="car">有車</label>
    </div>
    <p v-if="car">小明有車</p>
    <p v-else>小明沒車</p>

    <!-- 空一行無線 -->
    <br>
    <!-- 空一行有線 -->
    <hr>

    <h2>else-if</h2>
    <!-- 下拉選單 -->
    <select name="house" id="house" v-model.number="house">
        <option value="0">沒房</option>
        <option value="1">好窄</option>
        <option value="2">豪宅</option>
    </select>

    <h4>小明</h4>
    <p v-if="house === 0">沒房</p>
    <p v-else-if="house === 1">好窄</p>
    <p v-else-if="house === 2">豪宅</p>
    
    <br>
    <hr>

    <h2>V-show</h2>
    <div>
        <input type="checkbox" id="car2" v-model="car2">
        <label for="car2">有車</label>
    </div>

    <p v-show="car2">小明有車</p>

    <br>
    <hr>
</template>

<style lang="scss" scoped>
    
</style>