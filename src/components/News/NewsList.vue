<template>
    <div class="tmpl">
      <nav-bar title="新闻列表"></nav-bar>
      <div>
      <ul>
        <li v-for="newsList in newsLists" :key="newsList.id">
          <router-link :to="{name:'news.detail',query:{id:'news.id'} }">
            <img :src="newsList.img_url"/>
            <div>
              <span>{{newsList.title}}</span>
              <div class="new-desc">
                <p>点击数:{{newsList.click}}</p>
                <p>发表时间:{{newsList.add_time | convertTime('YYYY-MM-DD')}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
    export default {
      name: "NewsList",
      data(){
          return{
            newsLists:[],
          }
      },
      //created适合操作数据
      created (){
        /*this.$axios.get('getNewsList')
          .then(res=>{
             this.newsLists = res.data.message;
          })
          .catch( err => console.log('新闻列表异常',err));*/
      }
    }
</script>

<style scoped>

</style>
