//也可以在根文件直接写一个router.js,然后在main.js里自定一个router，引入这些路径

import Vue from 'vue'
import Router from 'vue-router'

import AddBLog from '@/components/AddBlog'
import ShowBLog from '@/components/ShowBlog'
import SingleBLog from '@/components/SingleBLog'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlog',
      component: ShowBLog
    },
    {
      path: '/addBlog',
      name: 'AddBlog',
      component: AddBLog
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBLog
    },

  ],
  mode:"history",
})
