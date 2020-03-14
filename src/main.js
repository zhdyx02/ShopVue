

//导入App组件
import app from './App.vue'

import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//2.1导入vue-resouce
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root= 'http://vue.studyit.io';

// 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;


//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// import Vue from 'vue'




//按需导入Mint-UI中的组件
// import {Header,Swipe,SwipeItem} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// import { Swipe, SwipeItem,Toast } from 'mint-ui';


// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Toast);


//1.3导入自己的router.js路由模块
import router from './router.js'

new Vue({
    el:'#app',
    render: c =>c(app),
    components: { app },
    router //1.4挂载路由对象到实例上
})