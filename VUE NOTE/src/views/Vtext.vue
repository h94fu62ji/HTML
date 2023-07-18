<script>
export default{
    data(){
        return{
            text: "Hello everymeow!!!"
        }
    }
}
    
</script>
    


<template>
    <h1>V-text</h1>
    <p>{{ text }}</p>
    <p v-text="text"></p>

</template>
    


<style>
    
</style>