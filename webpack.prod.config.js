const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 1.postCSS处理loader（CSS预处理工具，给CSS3的属性添加前缀，样式格式校验）
// autoprefixer插件自动添加前缀如display: -webkit-box;display: -ms-flexbox;

// 2.webpack4使用mini-css-extract-plugin插件抽取了样式，1-3版本使用extract-text-webpack-plugin
// 就不能再用style-loader注入到html中了
// 3.optimize-css-assets-webpack-plugin是CSS压缩插件,生产环境下需要压缩
// 使用了压缩CSS之后需要在index.html文件中<link rel="stylesheet" href="main.css">
// 4.JS压缩插件uglifyjs-webpack-plugin,前提是production模式下

// 5.解决CSS文件或者JS文件名字哈希变化的问题
// HtmlWebpackPlugin插件可以把打包后的CSS或者JS文件引用直接注入到HTML模板中，这样就不用手动修改文件的引用了
// 6.清理目录插件clean-webpack-plugin(清理dist目录中之前编译生成的带哈希尾巴的css或js文件或html文件)
// 7.对图片进行优化和压缩image-webpack-loader
// 8.file-loader和url-loader
// 9.webpack-merge工具将两个配置文件进行合并，这样我们就可以把开发环境和生产环境的公共配置抽取到一个公共的配置文件中
// 10.webpack-dev-server提供了一个简单的web服务器，并且能够实时重新加载
// 11.eslint校验代码格式规范
// 12.resolve配置模块如何解析
// 13.外部扩展externals是webpack配置文件中的和rules平级的一个项,比如吧jquery做成外部扩展，那么它不会被打包到bundle.js中
// 14.webpack-bundle-analyzer插件（开发环境下）
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname,'dist')//绝对路径
    },
    module:{
        rules:[
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap: true
                            // sourceMap可以追踪到样式所写在的源文件的位置(是在base.css中还是base.scss中，方便修改和调试),
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: (loader)=>[
                                require('autoprefixer')
                            ]
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap: true
                        }
                    }
                ]
            
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader:'url-loader',//根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            },
        ]
    },
    plugins:[
        new BundleAnalyzerPlugin(),//打包模块报表
        new MiniCssExtractPlugin({
            filename:'[name][hash].css',//设置最终输出的文件名,与主文件入口名字一样（main.css）
            chunkFilename: '[id][hash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'webpack配置文件',//默认值：Webpack App
			filename: 'main.html',//默认值：index.html,在dist中生成main.html
            template: path.relative(__dirname,"public/main.html"),//模板
            minify: {
                collapseWhitespace: true,
                removeComments: true,//是否移除注释
                removeAttributeQuotes: true//移除属性的引号
            }
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        minimizer:[
            new optimizeCssAssetsPlugin({}),//压缩CSS插件
            new uglifyjsPlugin({//压缩JS插件
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
}