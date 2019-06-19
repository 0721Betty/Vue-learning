#### 概念

- 是前端的一个项目构建工具，它是基于Node.js开发出来的一个前端工具
- **能处理JS文件的互相依赖关系 **
- **能处理JS的兼容问题，把高级的、浏览器不识别的语法转为低级的，浏览器能正常识别的语法**
  - 运行的命令格式： webpack   要打包的文件的路径   -o   打包好的输出文件的路径

#### 安装

- 运行`npm i webpack -g`进行全局安装

- 由于因为在webpack 3中，webpack本身和它的CLI以前都是在同一个包中，但在第4版中，他们已经将两者分开来更好地管理它们。

  所以用` npm install webpack-cli -g` 命令全局安装webpack-cli即可

  - 安装好webpack后使用`webpack -v`查看版本号

- 在项目的根目录中运行`npm i webpack --save-dev`安装到项目依赖中

  <img src="E:\前端\练习代码\Vue\day5\webpack-2\src\images\1.png">

#### webpack最基本的使用方法（参考文件夹Vue/webpack-1代码）

- `npm init -y`
- `npm i jquery -S`通过npm安装jquery
- `webpack ./src/main.js -o ./dist/bundle.js`

<img src="E:\前端\练习代码\Vue\day5\webpack-2\src\images\3.png"><img src="E:\前端\练习代码\Vue\day5\webpack-2\src\images\2.png">

#### webpack 最基本的配置文件的使用（参考文件夹Vue/webpack-1代码）

- 写配置文件webpack.config.js

  - ```javascript
    const path = require('path')
    
    // 这个配置文件，其实就是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象
    module.exports = {
        // 手动指定入口和出口
        entry: path.join(__dirname,'./src/main.js'),// 入口，表示要使用webpack打包哪个文件
        output: {//输出文件相关的配置
            path: path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
            filename: 'bundle.js' //这是指定输出文件的名称
        }
    }
    ```

  - 运行命令`webpack`更新即可

    <img src="E:\前端\练习代码\Vue\day5\webpack-2\src\images\4.png">