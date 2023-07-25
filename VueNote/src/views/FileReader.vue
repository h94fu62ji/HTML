<script>
export default {
    data() {
        return {
            file:null,
        }
    },
    methods:{
        getFile(e){
            console.log(e);
            const file = e.target.files[0];
            const reader = new FileReader;
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                console.log(e);
                this.file = e.target.result
            }
        
        
        }
    }
}
</script>
<template>
    <h1>File Reader</h1>
    <input type="file" @change="getFile">
    <br>
    <img :src="file" alt="">
</template>
<style lang="scss" scoped>
img{
    width: 300px;
}

</style>
