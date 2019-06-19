#### 使用webpack-dev-server这个工具，来实现自动打包编译的功能（示例代码：Vue/day5/webpack-3）

- 运行`npm i webpack-dev-server -D`把这个工具安装到项目的本地开发依赖
- 安装完毕后，这个工具的用法，和webpack命令的用法完全一样
- 由于，我们是在项目中，本地安装的webpack-dev-server,所以无法把它当做脚本命令在终端中直接运行，只有那些全局安装的工具（-g），才能在终端中正常执行
- 注意： webpack-dev-server这个工具，如果想要正常运行，要求，在本地项目中，必须安装webpack
  - 运行命令：`npm i webpack -D`
  - 如果报错说没有安装webpack-cli模块则运行命令:`npm i webpack-cli -D`进行安装
  - 这样就能在本地浏览器http://localhost:8080上运行该项目
  - webpack-dev-server帮我们打包生成的bundle.js文件，并没有存放到实际的物理磁盘上（即没有存放在./dist/bundle.js中，为了快才没放），而是直接托管到了电脑的内存中，所以我们在项目的根目录中根本找不到这个打包好的bundle.js
  - 我们可以认为，webpack-dev-server把打包好的文件以一种虚拟的形式，托管到了咱们项目的目录中，虽然我们看不到它，但是，可以认为和dist  src  node_module 平级，有一个看不见的文件bundle.js
  - **注意index.html中引入的`<script src="../dist/bundle.js"></script>`应该改为`<script src="/bundle.js"></script>`**这样才能在浏览器中看到修改代码之后的效果

- 

![2.1](E:\前端\练习代码\Vue\day5\webpack-3\src\images\2.1.png)

- ![2.2](E:\前端\练习代码\Vue\day5\webpack-3\src\images\2.2.png)

- ![2.3](E:\前端\练习代码\Vue\day5\webpack-3\src\images\2.3.png)



#### webpack-dev-server的常用命令参数（示例代码：Vue/day5/webpack-3）

- 在package.json中添加的`"dev":"webpack-dev-server"`加上参数--open即改为`"dev":"webpack-dev-server --open"`则运行命令`npm run dev`后会自动打开浏览器进入本地服务器localhost:8080
- 修改package.json中的"dev":"webpack-dev-server"为`"dev":"webpack-dev-server --open --port 9090 --contentBase src"`可以指定本地服务器端口为localhost:9090,运行命令`npm run dev`自动打开浏览器根目录为src进入index.html页面
- 加参数--hot即`"dev":"webpack-dev-server --open --port 9090 --contentBase src"`实现网页不重载（即不刷新）就展示最新代码的样式

#### webpack-dev-server配置命令的第二种方式（示例代码：Vue/day5/webpack-4）

- package.json中是`"dev":"webpack-dev-server"`不带参数，将参数放在webpack.config.js中

- webpack.config.js中加上

 ```javascript
devServer: { //这是配置 dev-server 命令参数的第二种形式，相对来说这种方式麻烦一些
      open: true, //自动打开浏览器
      port: 8080, //设置启动时候的运行端口
      contentBase: 'src', // 指定托管的根目录
      hot: true //启用热更新的第一步
   },
   plugins: [ //配置插件的节点
      new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象，启用热更新的第三步
   ]
 ```

```javascript
// 启用热更新的第二步
const webpack = require('webpack')
```

#### html-webpack-plugin的两个基本作用（示例代码：Vue/day5/webpack-5）

##### 使用步骤

- 先安装，运行命令：`npm i html-webpack-plugin -D`

- 引入刚刚安装的模块

``` javascript
  // 导入内存中生成HTML页面的插件
  const htmlWebpackPlugin = require('html-webpack-plugin')
```

``` javascript
plugins: [ //配置插件的节点
      new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
         template: path.join(__dirname,'./src/index.html'), //指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
         filename: 'index.html', //指定生成的页面的名称
      })
   ]
```

##### 作用

- 自动在内存中根据指定页面生成一个内存的页面
- 自动把打包好的bundle.js追加到页面中去