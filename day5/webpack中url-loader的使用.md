#### 默认情况下，webpack无法处理css文件中的url地址，不管是图片还是字体库，只要是url地址，都处理不了

- 运行命令：`cnpm i url-loader file-loader -D`

- ```javascript
  module:{ //配置所有第三方loader模块的
      rules: [ //第三方模块的匹配规则
          { test: /\.(jpg|png|gif|bmp|jpeg)$/ , use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'}//处理图片路径的loader
          //limit给定的值，是图片的大小，单位是byte,如果我们引用的图片，大于或等于给定的limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64的字符串
          //设置name前面加上hash值
      ]
      
  }
  ```

