<template>
  <div>
    <mt-header title=" 信息管理系统" ref="appHeader"></mt-header>

    <transition name="rv" mode="out-in">
      <router-view class="tmpl" :apprefs="$refs"/>
    </transition>

    <mt-tabbar v-model="selected" fixed ref="appFooter">
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" slot="icon" src="./assets/img/shopcart.png">
        购物车<mt-badge type="error" size="small">10</mt-badge>
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
  import EventBus from './Eventbus.js';
  import GoodsTools from './GoodsTools.js';

  export default {
    created(){
      EventBus.$on('addShopcart',data => {
          this.num += data;
      })
    },
    data(){
      return {
        selected:'',
        num:0
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

<style scoped>

  .rv-enter-active,.rv-leave-active {
    transition: opacity .5s;
  }

  .rv-enter, .rv-leave-to{
    opacity: 0;
  }

</style>
