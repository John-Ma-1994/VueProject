<template>
    <div>
      <nav-bar title="图文分享"></nav-bar>

      <div class="photo-header">
        <ul>
          <li v-for="category in categorys" :key="category.id">
            <a @click="loadImgsByCategoryId(category.id)" href="javascript:;">{{category.title}}</a>
          </li>

        </ul>
      </div>
      <div class="photo-list">
        <ul>
          <li v-for="image in images" :key="image.id">
            <a>
              <!-- 图片懒加载-->
              <img v-lazy="image.img_url"/>
              <p>
                <span>{{image.title}}</span>
                <br/>
                <span>{{image.zhaiyao}}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "PhotoList",
      data(){
          return{
            images:[],
            categorys:[]
          }
      },
      //路由守卫
      beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`

        // 路由复用，但参数改变触发， 参数指的是:query||params
        this.loadImgsByCategoryId(to.params.categoryId);
        next();
      },
      created(){
          //1: 获取路由参数categoryId
        let categoryId = this.$route.params.categoryId;
        this.loadImgsByCategoryId(categoryId);
        //获取分类信息
        this.$axios.get('/getimgcategory')
          .then(res=>{
            this.categorys=res.data.message;

            //向数组的第一个元素添加一个全部
            this.categorys.unshift({
              id:0,title:'全部'
            });
          })
          .catch(err=>console.log("获取分类信息失败",err));
      },
      methods:{
          loadImgsByCategoryId (categoryId){
            //2: 通过url拼接参数发请求
            this.$axios.get('getImages/'+categoryId)
              .then(res=>{
                this.images=res.data.message;
                //判断是否imgs.length==0
                if(this.images.length === 0){
                  this.$toast({
                    message: '加载失败',
                    iconClass: 'icon icon-jiazaishibai'
                  });
                }
              })
              .catch(err=>console.log("图片获取失败",err));
            //3: 获取数据做渲染
          },
        changeCategory (categoryId){

        }
      }
    }
</script>

<style scoped>

</style>
