<template>
    <div>
      <nav-bar title="商品详情"></nav-bar>
      <div>
        <div class="swiper">
          <my-swipe url="getthumimages"/>
        </div>
      </div>
      <div class="product-desc">
        <ul>
          <li>
            <span class="product-desc-span">
              {{goodsInfo.info}}
            </span>
          </li>
          <li class="price-li">市场价：
            <s>${{goodsInfo.market_price}}</s> 销售价:<span>${{goodsInfo.sell_price}}</span>
          </li>
          <li class="number-li">
            购买数量:<span>-</span><span>1</span><span>+</span>
          </li>
          <li>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="inseretBall">加入购物车</mt-button>
          </li>
        </ul>
      </div>

      <transition name="ball" @after-enter="afterEnter">
        <div class="ball" v-if="isExist"></div>
      </transition>

      <div class="product-props">
        <ul>
          <li>商品参数</li>
          <li>商品货号：{{goodsInfo.goods_no}}</li>
          <li>库存情况：{{goodsInfo.count}}件</li>
          <li>上架时间：{{goodsInfo.add_time | convertTime('YYYY-MM-DD')}}</li>
        </ul>
      </div>
      <div class="product-info">
        <ul>
          <li>
            <mt-button type="primary" size="large" plain>图文介绍</mt-button>
            <mt-button type="primary" size="large" plain>商品评论</mt-button>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
      name: "GoodsDetail",
      data(){
        return{
          goodsInfo:{},
        }
      },
      methods:{
        inseretBall(){
          this.isExist = true;
        },
        afterEnter(){
          this.isExist = false;
        }
      },
      created(){
        let imgid = this.$route.params.id;
        this.$axios.get('getGoodsInfo/' + imgid)
          .then(res=>{
            this.goodsInfo=res.data.message[0];
          })
          .catch(err=>console.log("商品详情获取失败",err));
      }
    }
</script>

<style scoped>

</style>
