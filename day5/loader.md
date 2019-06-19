#### main.js中import语法导入非JS样式(示例代码Vue/day5/webpack-6)

- main.js中

  - ```javascript
    import $ from 'jquery'
    // const $ = require('jquery')
    
    // 使用import语法导入css样式表
    import './css/index.css'
    // 注意：webpack，默认只能打包处理JS类型的文件，无法处理其它的非JS类型的文件;
    // 如果要处理非JS类型的文件，我们需要手动安装一些合适第三方loader加载器；
    // 1.如果想要打包处理css文件，需要安装 cnpm i style-loader css-loader -D
    // 2.打开webpack.config.js这个配置文件，在里面新增一个配置节点，叫做module,它是一个对象
    // 在这个module对象身上，有个rules属性，这个rules属性是个数组；这个数组中存放了所有第三方
    // 文件的匹配和处理规则；
    
    
    // 注意：webpack处理第三方文件的处理过程：
    // 1.发现这个要处理的文件不是js文件，然后就去配置文件中，查找有没有对应的第三方loader规则
    // 2.如果能找到对应的规则，就会调用对应的loader处理这种文件类型：
    // 3.在调用loader的时候，是从后往前调用的
    // 4.当最后一个loader调用完毕后，会把处理结果，直接交给webpack进行打包合并，最终输出到bundle.js中去
    ```

  - index.html中不用link引入css样式

  - 命令行输入`cnpm i style-loader css-loader -D`相应的模块

  - webpack.config.js配置文件中需要配置所有第三方模块

    ```javascript
    module: { // 这个节点，用于配置所有第三方模块加载器
          rules: [ //所有第三方模块的匹配规则
             { test: /\.css$/, use: ['style-loader','css-loader']},//配置处理.css文件的第三方loader规则
          // 先调用css-loader后调用style-loader，从右到左
          ]
    
       }
    ```

    

