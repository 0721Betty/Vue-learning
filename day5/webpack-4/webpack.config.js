const path = require('path');
// 启用热更新的第二步
const webpack = require('webpack')
 module.exports = {
     entry: path.join(__dirname,'./src/main.js'),
     output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
     },
     devServer:{//这是配置 dev-server 命令参数的第二种形式，相对来说这种方式麻烦一些
        open: true, //自动打开浏览器
        port: 8080, //设置启动时候的运行端口
        contentBase: 'src',// 指定托管的根目录
        hot: true //启用热更新的第一步
     },
     plugins:[//配置插件的节点
        new webpack.HotModuleReplacementPlugin()//new一个热更新的模块对象，启用热更新的第三步
     ]
 }