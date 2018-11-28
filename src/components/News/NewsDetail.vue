<template>
    <div>

      <NavBar title="新闻详情"></NavBar>
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
      }
    }
</script>

<style scoped>

</style>
