const path = require('path');
// 启用热更新的第二步
const webpack = require('webpack')
// 导入内存中生成HTML页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
   entry: path.join(__dirname, './src/main.js'),
   output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js'
   },
   devServer: { //这是配置 dev-server 命令参数的第二种形式，相对来说这种方式麻烦一些
      open: true, //自动打开浏览器
      port: 8080, //设置启动时候的运行端口
      contentBase: 'src', // 指定托管的根目录
      hot: true //启用热更新的第一步
   },
   plugins: [ //配置插件的节点
      new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象，启用热更新的第三步
      new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
         template: path.join(__dirname,'./src/index.html'), //指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
         filename: 'index.html', //指定生成的页面的名称
      })
   ],
   module: { // 这个节点，用于配置所有第三方模块加载器
      rules: [ //所有第三方模块的匹配规则
         { test: /\.css$/, use: ['style-loader','css-loader']},//配置处理.css文件的第三方loader规则
      // 先调用css-loader后调用style-loader，从右到左
      ]

   }
}