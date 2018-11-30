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
            <textarea v-model="newComment"></textarea>
          </li>
          <li>
            <mt-button @click="sendMsg" type="primary" size="large">发表评论</mt-button>
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
            msgs:[],
            newComment:''
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
          },
          sendMsg(){
            if(this.new.trim() === ''){
              return this.$toast('评论信息不能为空');
            }
            //获取评论信息
            this.$axios.post('postcomment/'+ this.cid,'content=' + this.newComment)
              .then(res=>{
                // 发表之后，清空评论框
                this.newComment = '';
                // 加载第一页数据，即最新数据
                this.page = 1;
                this.loadMore();
              }).catch(err=>console.log('发表评论失败',err));

          }
        }
    }
</script>

<style scoped>

</style>
