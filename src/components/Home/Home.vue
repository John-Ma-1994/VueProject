<template>
    <div>
      <mt-swipe :show-indicators="false">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            imgs:[]  //轮播图数据
          }
        },

      //created创建组件的生命周期函数,可以操作数据
      created (){
          this.$axios.get('getlunbo')
            .then(res=>{
                // res.data.message =[{img:'图片地址'}]
                this.imgs = res.data.message;
            })
            .catch(err=> console.log('轮播失败',err));
      }
    }
</script>

<style>
  .mint-swipe{
    height: 200px;
  }
</style>
