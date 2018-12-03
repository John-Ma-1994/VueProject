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
            购买数量:<span @click="substract">-</span><span>{{pickNum}}</span><span @click="add">+</span>
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
            <mt-button @click="showPhotoInfo" type="primary" size="large" plain>图文介绍</mt-button>
            <mt-button @click="goodsComment" type="primary" size="large" plain>商品评论</mt-button>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
  import EventBus from '@/Eventbus';

    export default {
      name: "GoodsDetail",
      data(){
        return{
          isExist:false,
          goodsInfo:{},
          pickNum:1,
        }
      },
      methods:{

        add(){
          if(this.pickNum >= this.goodsInfo.count){
            return ;
          }
          this.pickNum ++;
        },
        substract(){
          if(this.pickNum <= 1){
            return ;
          }
          this.pickNum --;
        },

        inseretBall(){
          this.isExist = true;

        },
        afterEnter(){
          this.isExist = false;
          //通知App组件增加小球数量
          EventBus.$emit('addShopcart',this.pickNum);
        },
        //图文介绍
        showPhotoInfo(){
          //编程导航
          this.$router.push({
            name:'photo.info',
            query:{
              id:this.$route.params.id
            }
          });
        },
        //商品评论
        goodsComment(){
          this.$router.push({
            name:'goods.comment',
            query:{
              id:this.$route.params.id
            }
          });
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
