<template>
    <div>
      <h1 @click="goback">&nbsp;<</h1>
      <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
      name: "nav-bar",
      props:['title'],
      methods:{
          goback(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>

</style>
