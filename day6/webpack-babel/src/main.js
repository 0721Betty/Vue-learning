// 这是main.js是我们项目的JS入口文件
import $ from 'jquery'
import './css/index.css'
$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})
class Person {
    // 使用static关键字，可以定义静态属性
    // 所谓静态属性，就是可以直接通过类名直接访问的属性
    // 实例属性：只能通过类的实例，来访问的属性，叫做实例属性
    static info = { name: 'zs',age: 20}
}
// 访问Person类身上的info静态属性
console.log(Person.info)