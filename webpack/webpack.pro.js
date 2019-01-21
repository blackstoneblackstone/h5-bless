const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].bundle.js'
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
          name: '[path][name]-[hash].[ext]'
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 1000000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([{ from: 'MP_verify_fdnVlwV4XvwRqAtj.txt', to: 'MP_verify_fdnVlwV4XvwRqAtj.txt' }])
  ],
  resolve: {
    alias: {
      '@static': path.resolve('./static')
    }
  }
};
