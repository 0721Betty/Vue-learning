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