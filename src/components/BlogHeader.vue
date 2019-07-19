<template>
  <div class="blog-header">
    <nav>
      <ul>
        <li>
          <!--exact使用后，点击出现样式，点击另一个其他按钮样式消失，即只在激活链接上添加样式-->
          <router-link to="/" exact>博客</router-link>
          <router-link to="/addBlog" exact>写博客</router-link>

        </li>
      </ul>
     </nav>
  </div>
</template>

<script>
  export default {
    name:"blog-header",
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
