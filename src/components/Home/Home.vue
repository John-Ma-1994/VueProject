<template>
    <div>
      <mt-swipe :show-indicators="false">
        <!--<mt-swipe-item v-for="(img,index) in imgs" :key="index">
          <img :src="img.img"/>
        </mt-swipe-item>-->
        <mt-swipe-item >
          <img src="../../assets/img/picture/1.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item >
          <img src="../../assets/img/picture/2.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item >
          <img src="../../assets/img/picture/3.jpg"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            imgs:['1']  //轮播图数据
          }
        },

      //created创建组件的生命周期函数,可以操作数据
      created (){

        /*this.$axios.get('getlunbo')
            .then(res=>{
                // res.data.message =[{img:'图片地址'}]
                this.imgs = res.data.message;
            })
            .catch(err=> console.log('轮播失败',err));*/
      }
    }
</script>

<style>
  .mint-swipe {
    height: 200px;
  }
</style>
