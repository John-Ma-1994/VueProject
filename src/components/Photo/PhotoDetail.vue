<template>
    <div>

      <nav-bar title="图文详情"></nav-bar>
      <div class="photo-title">
        <p>{{info.title}}</p>
        <span>发起日期：{{info.add_time | convertTime('YYYY-MM-DD')}}</span>
        <span>{{info.click}}次浏览</span>
        <span>分类：民生经济</span>
      </div>
      <!--<ul>
        <vue-preview :slides="imgs"></vue-preview>
        <li v-for="(img,index) in imgs" :key="img.index">
          <img :src="img.src"/>
        </li>
      </ul>-->
      <vue-preview :slides="imgs"></vue-preview>
      <div class="photo-desc">
        <p v-html="info.content"></p>
      </div>

      <!-- 使用评论组件 -->
      <Comment :cid="$route.query.id"/>

    </div>
</template>

<script>
    export default {
        name: "PhotoDetail",
      data(){
          return{
            info:{},
            imgs:[]
          }
      },
      created(){
          let id =this.$route.query.id;
          //发请求
          // 获取详情
          this.$axios.get('getImageInfo/'+ id)
            .then(res=>{
                this.info = res.data.message[0];
            })
            .catch(err => console.log('图文详情获取失败',err));
          //获取缩略图
          this.$axios.get('getthumimages/' + id)
            .then(res=>{
              this.imgs = res.data.message;
              this.imgs.forEach(img => {
                img.msrc = img.src;
                img.w=600;
                img.h=400;
              })
            })
            .catch(err=>console.log('图片缩略图获取失败',err));
      }
    }
</script>

<style scoped>

</style>
