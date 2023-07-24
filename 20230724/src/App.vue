<script>
export default {
  data() {
    return {
      firstName :"",
      lastName :"" ,
    }
  },
  beforeCreate(){ console.log("beforeCreate") },
  created(){ console.log("created") },
  beforeMount(){ console.log("beforeMount") },
  mounted(){
    console.log("mounted")
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
         this.firstName = (data.results[0].name.first)
         this.lastName = (data.results[0].name.last)
      })
  
  },  
  beforeUpdate(){console.log("beforeUpdate")},
  updated(){console.log("update")},
}
</script>

<template>
  <h1>fetch</h1>
  <p>{{ firstName }}</p>
  <p>{{ lastName }}</p>

</template>

<style scoped>

</style>
