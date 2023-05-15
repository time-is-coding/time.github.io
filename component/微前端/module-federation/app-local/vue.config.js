const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  devServer: {
    port: 8082, // 设置端口号 8082
  },
  configureWebpack: {
    plugins: [new webpack.container.ModuleFederationPlugin({
      // 输出模块容器名称
      name: 'app_local',
      // 指定打包的文件名
      filename: 'remote-entry.js',
      // 引入 的远程模块
      remotes: {
        // key: 为远程应用导出的容器名称
        // value: 映射地址，指定端口号，访问公共组件入口，该入口提供了暴露的所有公共组件资源
        app_exposes: 'app_exposes@http://localhost:8081/remote-entry.js'
      },
      shared: {
        vue: {
          singleton: true,
        },
      },
    })],
  },
})
