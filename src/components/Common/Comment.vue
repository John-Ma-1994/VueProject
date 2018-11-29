<template>
    <div>
      <div class="photo-bottom">
        <ul>
          <li class="photo-comment">
            <div>
              <span>提交评论</span>
              <span><a>返回</a></span>
            </div>
          </li>
          <li class="txt-comment">
            <textarea></textarea>
          </li>
          <li>
            <mt-button type="primary" size="large">发表评论</mt-button>
          </li>
          <li class="photo-comment">
            <div>
              <span>评论列表</span>
              <span>44条评论</span>
            </div>
          </li>
        </ul>
        <ul class="comment-list">
          <li v-for="(msg,index) in msgs" :key="index">
            {{msg.user_name}}：{{msg.content}}&nbsp;&nbsp;&nbsp;&nbsp;{{msg.add_time | relativeTime}}
          </li>
        </ul>
        <mt-button plain type="danger" size="large" @click="loadMore()">加载更多</mt-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        data(){
          return{
            page:1,// 组件内控制页码
            msgs:[]
          }
        },
        props:['cid'],//评论需要的id
        created(){
          // 使用这个组件的时候，是否有页码，若没有则是第1页
          this.page = this.$route.query.page || '1';
          this.loadMore();
        },
        methods:{
          //根据页码发请求
          /*firstLoad(){
            this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
              .then(res => {
                if(res.data.message.length === 0){
                  this.$toast('没有数据了');
                }
                this.msgs = res.data.message;
                this.page ++; //页码
              })
              .catch(err=>console.log("评论获取失败",err));
          },*/
          loadMore(){
            this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
              .then(res => {
                if(res.data.message.length === 0){
                  this.$toast('没有数据了');
                }
                if(page){
                  this.msgs = this.msgs.concat(res.data.message);
                }else{
                  this.msgs = res.data.message;
                }

                this.page ++; //页码
              })
              .catch(err=>console.log("评论获取失败",err));
          }
        }
    }
</script>

<style scoped>

</style>
