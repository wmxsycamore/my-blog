<template>
  <div id="app">
    <!--<ul>-->
      <!--<li>-->
        <!--<router-link to="/">博客</router-link>-->
        <!--<router-link to="/addBlog">写博客</router-link>-->
      <!--</li>-->
    <!--</ul>-->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
  // import AddBlog from "./components/AddBlog"
  // import ShowBlog from "./components/ShowBlog"
  import BlogHeader from "./components/BlogHeader.vue"

  export default {
  name: 'App',
    components:{
      // AddBlog,
      // ShowBlog,
      BlogHeader,
    }


}
</script>

<style>
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px
  }
  nav {
    background: crimson;
    padding: 30px 0;
    margin-bottom: 40px;
  }
  .router-link-active {
    background: rgba(255,255,255,0.8);
    color: #444;
  }
</style>
