// 这是main.js是我们项目的JS入口文件

// 1.导入Jquery
// import **** from **** 是ES6中导入模块的方式
// 由于ES6的语法太高级了，浏览器解析不了，所以这一执行会报错，可以使用webpack
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

$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})
