const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        type: 'javascript/auto',
        test: /\.(png|svg|jpg|gif|json|atlas|mp3)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 0,
      maxSize: 300000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  watch: true,
  watchOptions: {
    ignored: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ],
  devServer: {
    contentBase: path.resolve('./dist'),
    // 静态文件目录位置，只有当你需要在webpack-dev-server本地服务器查看或引用静态文件时用到。类型：boolean | string | array, 建议使用绝对路径
    hot: true,
    // 模块热更新。依赖于HotModuleReplacementPlugin
    noInfo: false,
    // 在命令行窗口显示打包信息
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@static': path.resolve('./static')
    }
  }
};
