#### 如何在webpack构建的项目中，使用Vue进行开发

#### 在普通网页中使用vue

- 1. 使用script标签，引入vue包
  2. 在index页面中，创建一个id为app 的div容器
  3. 通过new Vue 得到一个vm的实例

#### 在webpack中尝试使用Vue

- 运行命令：`npm i vue -S`
- 在main.js文件中通过

``` javascript
// 在webpack中，使用import Vue from 'vue'导入的Vue构造函数，功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式
//import Vue from 'vue'
//var Vue = require('vue')


//方法一：下面是正确的导入包的语句
import Vue from '../node_modules/vue/dist/vue.js'
var vm = new Vue({
	el: '#app',
	data: {},
    methods:{}
})
```

``` javascript
//方法二：在webpack.config.js文件中加上main.js中仍然是import Vue from 'vue'
module.exports = {
    resolve:{
        alias:{// 设置 vue 被导入时候的包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}
```

#### 默认webpack无法打包.vue文件，需要安装相关的loader

- `cnpm i vue-loader vue-template-compiler -D`

- 在配置文件webpack.config.js中，新增loader配置项{ test: /\.vue$/, use: 'vue-loader'}

  - ``` javascript
    const VueLoaderPlugin = require('vue-loader/lib/plugin');
    plugins: [ 
          new VueLoaderPlugin(),
          ]
       ],
    module: { // 这个节点，用于配置所有第三方模块加载器
          rules: [ 
             { test: /\.vue$/, use: 'vue-loader'}
          ]
       }
    ```

- 定义一个.vue结尾的组件，其中，组件有三部分组成：template,script,style

- 使用`import login from './login.vue'`导入这个组件

- 创建vm 的实例var vm = new Vue({ el: "#app", render: c=>c(login) })

- 在页面中创建一个id为app的div元素，作为我们vm实例要控制的区域

