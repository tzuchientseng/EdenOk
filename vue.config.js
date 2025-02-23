const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './', // 🚀 改成相對路徑，讓 build 後的檔案正確引用資源
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL || 'https://eden.sunnytseng.com/api',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
