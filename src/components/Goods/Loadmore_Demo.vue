<template>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handlTopChange" ref="loadmore">
      <ul>
        <li v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
          ↓
        </span>
        <span v-show="topStatus === 'loading' ">Loading...</span>
      </div>
    </mt-loadmore>
</template>

<script>
    export default {
      name: "GoodsList",
      data(){
        return{
          list:[],
          topStatus:'',
        }
      },
      methods:{
        handlTopChange(status){
          this.topStatus = status;
        },
        loadTop(){
          this.$refs.loadMore.onTopLoaded();
        },
        loadBottom(){
          //this.$refs.loadMore.onBottomLoaded();
        }
      }
    }
</script>

<style scoped>

</style>
