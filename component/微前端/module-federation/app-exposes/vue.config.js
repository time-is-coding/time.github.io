const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  // 需要设置 publicPath 为 auto，否则其他引用在获取远程组件文件资源时路径是自己的路径
  publicPath: 'auto',
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  devServer: {
    port: 8081, // 设置端口号 8081
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [new webpack.container.ModuleFederationPlugin({
      // 指定输出容器名
      name: 'app_exposes',
      // 指定打包后输出的文件名，位于根目录
      // 即其他应用访问公共组件的入口文件
      // 入口文件保存各公共组件的请求地址
      // 共享代码不移动在此文件中
      filename: 'remote-entry.js',
      // 导出 给其他应用获取的组件或页面文件
      exposes: {
        // key: 该文件相对于 上面 remote-entry.js 的相对路径
        // value： 从 vue.config.js 访问组件的路径
        './CommonComponent.vue': './src/components/CommonComponent.vue',
        './AboutView.vue': './src/views/AboutView.vue',
      },
      // 用于避免项目出现多个公共依赖，设置这个属性后，webpack在加载时会先判断本地是否存在该依赖包，没有的话则加载远程应用的依赖包
      shared: {
        vue: {
          singleton: true,
        },
      },
    })],
  },
})
