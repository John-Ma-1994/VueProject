<template>
    <div :style="{height: boxHeight}">
      <nav-bar title="商品展示"></nav-bar>
      <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" :bottom-all-loaded="isAllLoaded" ref="loadmore">
        <ul>
          <li v-for="goods in goodsList" :key="goods.id">
            <router-link :to="{name:'goods.detail',params:{id:goods.id}}">
              <img :src="goods.img_url">
              <div>{{goods.title | convert(25)}}</div>
              <div class="desc">
                <div class="sell">
                  <span>${{goods.sell_price}}</span>
                  <s>${{goods.market_price}}</s>
                </div>
                <div class="detail">
                  <div class="hot">
                    热卖中
                  </div>
                  <div class="count">
                    剩{{goods.count}}件
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </mt-loadmore>
    </div>
</template>

<script>
  // 本地静态资源图片  告知webpack 帮助移动到未来的dist目录
  // import ImgSrc from '../xxx.jpg';
  // <img :src="ImgSrc"/>



    export default {
      name: "GoodsList",
      props:['apprefs'],
      data(){
        return{
          boxHeight:0,
          goodsList:[],
          page:1,
          isAllLoaded:false,//判断全部数据是否加载完毕
        }
      },
      created(){
        this.page = this.$route.query.id || '1';
        this.loadByPage(this.page);
      },
      mounted(){
        //装载数据完成  接收apprefs.appHeader
        // 公式：设备高度 - 头 - 尾 = 中间的高度（loadmore）
        let headerHight = this.apprefs.appHeader.$el.offsetHeight;
        let footerHight = this.apprefs.appFooter.$el.offsetHeight;
        this.boxHeight = document.body.clientHeight - headerHight- footerHight;

      },
      methods:{
        loadByPage(){
          this.$axios.get('getgoods?pageindex='+this.page)
            .then(res=>{
              this.goodsList = res.data.message;
              this.page ++;
            })
            .catch(err=>console.log('商品列表获取失败',err))
        },
        concatByPage(){
          this.$axios.get('getgoods?pageindex='+this.page)
            .then(res=>{

              //判断是否还有数据
              if(res.data.message.length === 0){
                this.$toast('没有更多数据了');
                //loadmore的禁止函数调用的属性来控制
                this.isAllLoaded = true;

              }

              this.goodsList = this.goodsList.concat(res.data.message);
              this.$refs.loadMore.onBottomLoaded();
              this.page ++;
            })
            .catch(err=>console.log('商品列表获取失败',err))
        },
        loadBottom(){
          this.concatByPage(this.page);
        }
      }
    }
</script>

<style scoped>

</style>
