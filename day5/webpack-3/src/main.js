// 这是main.js是我们项目的JS入口文件

// 1.导入Jquery
// import **** from **** 是ES6中导入模块的方式
// 由于ES6的语法太高级了，浏览器解析不了，所以这一执行会报错，可以使用webpack
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','blue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})
