<template>
    <div>
        <h1>这是App组件</h1>
        <mt-button type="primary" @click="show">primary</mt-button>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodlist">GoodList</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    // 导入Toast组件
    import { Toast } from "mint-ui"
import { setTimeout } from 'timers';
    export default {
        data() {
            return {
                toastInstance: null
            };
        },
        created(){
            // 先显示提示信息，三秒之后关闭
            this.show();
            setTimeout(() => {
                this.toastInstance.close();
            },3000);
        },
        methods : {
            show() {
                this.toastInstance = Toast({
                    message: '提示信息',
                    duration: 1000,
                    position: 'top',
                    iconClass: 'glyphicon glyphicon-headphones', //设置图标的类，使用bootstrap中的图标
                    className: 'mytoast',  //自定义Toast的样式，需要自己提供一个类名
                });
            }
        }
    }
</script>
