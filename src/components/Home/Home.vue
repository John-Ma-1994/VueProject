<template>
  <div>
    <mt-swipe :show-indicators="false">
      <!--<mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.img"/>
      </mt-swipe-item>-->
      <mt-swipe-item>
        <img src="../../assets/img/picture/1.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/img/picture/2.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/img/picture/3.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/img/picture/4.jpg"/>
      </mt-swipe-item>
    </mt-swipe>


    <!--九宫格样式-->
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <a href="">
            <span :class="grid.className"></span>
            <span>{{grid.title}}</span>
          </a>
        </my-li>
      </my-ul>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        //imgs: [],  //轮播图数据
        grids: [
          {className: 'cms-news', title: '新闻资讯'},
          {className: 'cms-show', title: '商品展示'},
          {className: 'cms-share', title: '图文分享'},
          {className: 'cms-back', title: '留言反馈'},
          {className: 'cms-search', title: '搜索资讯'},
          {className: 'cms-call', title: '联系我们'}
        ]
      }
    },

    /*created创建组件的生命周期函数,可以操作数据*/
    created() {
      /*this.$axios.get('getlunbo')
        .then(res=>{
            // res.data.message =[{img:'图片地址'}]
            this.imgs = res.data.message;
        })
        .catch(err=> console.log('轮播失败',err));*/
    }
  }
</script>

<style scoped>
  .mint-swipe {
    height: 200px;
  }

  /*九宫格样式*/

  .cms-news {
    background-image: url("../../assets/img/news.png");
    background-repeat: round;
    display: inline;
    width: 50px;
    height: 50px;
  }
  .cms-show {
    background-image: url("../../assets/img/goodsShow.png");
    background-repeat: round;
    display: inline;
    width: 50px;
    height: 50px;
  }
  .cms-share {
    background-image: url("../../assets/img/picShare.png");
    background-repeat: round;
    display: inline;
    width: 50px;
    height: 50px;
  }
  .cms-back {
    background-image: url("../../assets/img/feedback.png");
    background-repeat: round;
    display: inline;
    width: 50px;
    height: 50px;
  }
  .cms-search {
    background-image: url("../../assets/img/search.png");
    background-repeat: round;
    display: inline;
    width: 50px;
    height: 50px;
  }
  .cms-call {
    background-image: url("../../assets/img/callme.png");
    background-repeat: round;
    display: inline;
    width: 50px;
    height: 50px;
  }
</style>
