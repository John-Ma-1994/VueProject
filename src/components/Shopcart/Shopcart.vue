<template>
    <div>
      <div>

        <nav-bar title="购物车"/>

        <div>
          <ul>
            <li v-for="(goods,index) in shopcart" :key="goods.id">
              <mt-switch v-model="goods.isSelected"></mt-switch>
              <img :src="goods.thumb_path"/>
              <div>
                <p>商品标题</p>
                <div>
                  <span>${{goods.price}}</span>
                  <span @click="substract(goods)">-</span>
                  <span>{{goods.num}}</span>
                  <span @click="add(goods)">+</span>
                  <a href="javascript:;" @click="del(index)">删除</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <p>总计（不含运费）：</p>
            <span>已选择商品{{payment.count}}件，总价${{payment.price}}</span>
          </div>
          <div>
            <mt-button type="danger" size="large">去支付</mt-button>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  import GoodsTools from '@/GoodsTools';

    export default {

      //计算属性
      computed:{
        payment(){
          let price = 0;
          let count = 0;
          this.shopcart.forEach( goods=>{
            if(goods.selected){
              count += goods.num;
              price += goods.num * goods.price;
            }
          });

          return {
            count,price
          };
        }
      },


      beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        if(confirm('要离开吗?')){
          //保存当前购物车数据
          let obj = {};
          this.shopcart.forEach(goods => {
            obj[goods.id] = goods.num;
          });
          GoodsTools.saveGoods(obj);
          next();
        }else{
          next(false);  //取消导航行为
        }
      },
      methods:{
        add(goods){
          goods.num ++;
        },
        substract(goods){
          goods.num --;
        },
        del(index){
          this.shopcart.splice(index,1);
        },


      },
      data(){
        return{
          shopcart:[],
        }
      },
      created(){
        let goodsList = GoodsTools.getGoodsList();
        let ids = Object.keys(goodsList.join(','));
        this.$axios.get('goods/getshopcartlist/' + ids)
          .then(res => {
            this.shopcart = res.data.message;

            /*this.shopcart.forEach(goods => {
              if(goodsList[goods.id]){
                goods.num = goodsList[goods.id];
              }

              goods.isSelected = true;
            })*/

            //如果在数据不完整的情况下添加属性，就需要手动通知vue
            //完成相应式-> 双向数据绑定

            this.shopcart.forEach(goods => {
              if(goodsList[goods.id]){
                this.$set(goods,'num',goodsList[goods.id]);
              }

              //goods.isSelected = true;
              this.$set(goods,'isSelected',true);
            })

          })
          .catch(err=>console.log('购物车数量异常',err));
      }
    }
</script>

<style>

</style>
