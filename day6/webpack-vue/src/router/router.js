// 1.导入vue-router包
import VueRouter from 'vue-router'
import login from '../view/login-register/login.vue'
import register from '../view/login-register/register.vue'

var router = new VueRouter({
    routes: [
        { path: '/login',component: login},
        { path: '/register',component: register},
    ]
})
export default router