import VueRouter from 'vue-router'

//导入对应的路由组件
import home from './components/tabber/home.vue'
import search from './components/tabber/search.vue'
import shopcar from './components/tabber/shopcar.vue'
import member from './components/tabber/member.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/search',component:search},
    {path:'/shopcar',component:shopcar},
    {path:'/member',component:member},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsinfo',component:NewsInfo}
  ],
  linkActiveClass:'mui-active' //设置默认路由高亮的类
})

// 把路由对象暴露出去
export default router