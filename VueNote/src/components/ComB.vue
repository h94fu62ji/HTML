<script>
export default {
    inject: ["text"],
}
</script>

<template>
    <div class="wrap">
        <h2>ComB</h2>
        <p>{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.wrap{
    border: 2px solid black;
    width: 300px;height: 300px;
}
</style>