<script>
export default {
    
}
</script>

<template>
    <div class="small">
        <div class="left"></div>
    </div>
</template>

<style lang="scss" scoped>
.small{
    width: 75px;height: 75px;
    background-color: #aed2a2;
    position: absolute;
    top: -2px;right: -2px;
}
.left{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 75px 0 0 75px;
    border-color: transparent transparent transparent #3cad4a;
    position: absolute;
}



</style>