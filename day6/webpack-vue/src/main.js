// // 1.导入Vue
// import Vue from '../node_modules/vue/dist/vue.js'
// // 2.导入vue-router包
// import VueRouter from 'vue-router'
// import router from '../src/router/router.js'


// // 2.1手动安装VueRouter
// Vue.use(VueRouter)


// // 导入App组件
// import app from './App.vue'


// var vm = new Vue({
//     el: "#app",
//     render: c=>c(app),
//     router
// })

import Vue from '../node_modules/vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from '../src/router/router.js';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
// Vue.use(iView);

// The routing configuration
// const RouterConfig = {
//     routes: Routers
// };
// const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});