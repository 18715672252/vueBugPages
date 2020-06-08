// 打包优化(项目大小)
// 1. 按需加载 （babel）
// 2. 基础资源通过CDN引入（html-webpack-externals-plugin将vue,vue-router,vuex基础包通过cdn方式引入，不在打包进dist文件）
// 3. sourceMap 改为false 在webpack.prod.conf.js中的UglifyJsPlugin中配置（44行左右）




// 打包构建速度优化
// 1.通过DllPlugin插件优化打包性能，减少打包时间