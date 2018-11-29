<template>
  <div>
    <mt-header title=" 信息管理系统"></mt-header>

    <router-view class="tmpl"/>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" slot="icon" src="./assets/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/img/find.png">
        查找
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/img/vip.png">
        会员
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        selected:''
      }
    },
    methods:{
      changeHash(){
        this.$nextTick(function () {
          //在vue完成渲染任务以后的行为
          this.$router.push({
            name:this.selected
          })
        })

      }
    },
    watch:{
      /*selected(newV,oldV){
        this.$router.push({
            name:newV
        })
      }*/
    }
  }
</script>

<style>

</style>
