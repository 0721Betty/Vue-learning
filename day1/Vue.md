### Vue

#### 通过script加载CDN文件

- ``` vue
  //自动识别最新稳定版的Vue.js
  <script src= "https://unpkg.com/vue/dist/vue.min.js"></script>
  
  //指定某个具体版本的vue.js
  <script src= "https://unpkg.com/vue@2.1.6/dist/vue.min.js"></script>
  ```


#### 自定义全局指令

- Vue.directive()定义全局的指令，如：v-focus

  - 参数一：指令的名称，在定义的时候，指令的名称前面不需要加v-前缀，调用的时候必须在指令名称前加上 v-前缀

  - 参数二：是一个对象，这个对象身上，有一些指令相关的函数

  - ```javascript
    Vue.directive('focus',{
        bind: function(el){//每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
            //注意：在每个函数中，第一个参数永远是el，表示被绑定了指令的那个元素，这个el参数是一个原生的JS对象
            //在元素刚绑定了指令的时候，还没有插入到DOM中，这时候，调用focus方法没有作用
            //el.focus()
        },
        inserted: function(el){//元素插入到DOM中的时候，会执行该函数【触发一次】
            el.focus()
        },
        updated: function(el){//当VNode更新的时候，会执行 updated，可能会触发多次
            
        }
    })
    ```

  - ```javascript
    //自定义一个设置字体颜色的指令
    Vue.directive('color',{
        bind: function(el,binding){
            el.style.color = binding.value
        }
    })
    ```

  - 

