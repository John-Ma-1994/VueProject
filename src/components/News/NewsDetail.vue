<template>
    <div>

      <NavBar :title="title"></NavBar>
      <div class="news-title">
        <p>{{newsDetail.title}}</p>
        <div>
          <span>{{newsDetail.click}}次点击</span>
          <span>分类:{{newsDetail.categories}}</span>
          <span>添加时间:{{newsDetail.add_time | convertTime('YYYY-MM-DD')}}</span>
        </div>
        <div v-html="newsDetail.content">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewsDetail",
      data:{
          return:{
            title:'',
            newsDetail:{}   //新闻详情
          }
      },
      created(){
          //获取路由查询字符串参数id
        let id = this.$route.query.id;
          this.$axios.get('getNewsDetail/'+id)
            .then(res=>{
              this.newsDetail=res.data.message[0];
            })
            .catch(err=>console.log("新闻详情获取失败",err))
      },
      // 路由确认前，组件渲染前的守卫函数
      beforeRouteEnter (to, from, next) {

        /* 1：判断from 若from为空，则说明是粘贴地址栏
        *       1.1 继续判断， 根据to来设置title
        *  2：若from 是新闻列表， title===>新闻详情
        *  3：若from 是商品详情， title===>商品图文介绍
        *
        * */
        let title = '';
        if (from.name == null){
          if(to.name === 'news.detail'){
            title = '新闻详情';
          }else if(to.name === 'photo.info'){
            title = '商品图文介绍';
          }
        } else if(from.name === 'new.list'){
          title = '新闻详情';
        } else if(from.name === 'goods.detail'){
          title = '商品图文介绍';
        }

        next(vm => {
          vm.title = title;
        });

        /*next(vm => {
          // 通过 `vm` 访问组件实例
        })*/
      }
    }
</script>

<style scoped>

</style>
