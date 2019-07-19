<template>
  <div id="show-blog" v-theme:column="'wide'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.title">
      <router-link :to="'/blog/' + blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
      <article>
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:"show-blog",
    data(){
      return {
        blogs:[],
        search:'',
      }
    },
    created() {
      //请求的本地文件只能放在static文件夹下
      this.$http.get("http://jsonplaceholder.typicode.com/posts")
        .then(function (data) {
          this.blogs = data.body.slice(0,10)
          console.log(this.blogs)

        })
    },
    computed:{
      filteredBlogs:function () {
        return this.blogs.filter((blog)=>{
          return blog.title.match(this.search)
        })
      }
    },
    //局部注册过滤器
    filters: {
      //写法一
      // "to-uppercase": function (value) {
      //     return value.toUpperCase();
      // },
      //写法2
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    //局部自定义指令
    directives:{
      "rainbow":{
        bind(el,binding,vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2,8)

        }
      }
    }
  }
</script>

<style scoped>
 #show-blog {
   max-width: 800px;
   margin: 0 auto;
   
 }
  .single-blog {
    padding: 20px 0;
    margin: 20px auto;
    box-sizing: border-box;
    background: #eee;
  }
  #show-blog a{
    color: #444;
    text-decoration: none;
  }
  input[type="text"] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
