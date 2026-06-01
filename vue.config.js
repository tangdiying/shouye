const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  
  configureWebpack: (config) => {
    const plugins = []
    
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false
        })
      )
    }
    
    return {
      plugins,
      optimization: {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log']
              },
              output: {
                comments: false
              }
            }
          })
        ],
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: -10
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      },
      performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      }
    }
  },
  
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', require('path').resolve(__dirname, 'src'))
    
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => ({
        ...options,
        limit: 8192,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]'
          }
        }
      }))
    
    config.plugin('html').tap((args) => {
      args[0].minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyCSS: true,
        minifyJS: true,
        removeEmptyAttributes: true
      }
      return args
    })
  }
})