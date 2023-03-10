const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/wp-json': {
        target: 'http://irealty.local',
        secure: false,
        changeOrigin: true
      }
    }
  }

}
