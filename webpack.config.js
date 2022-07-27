const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    pageOne: './src/app/areas/shopping-list/shopping-list.js',
    pageTwo: './src/app/areas/shopping-cart/shopping-cart.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      minChunks: 2,
    },
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/assets/img/'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HTMLPlugin({
      filename: 'shopping-list.html',
      template: './src/app/areas/shopping-list/shopping-list.html',
      chunks: ['pageOne'],
      inject: "body"
    }),
    new HTMLPlugin({
      filename: 'shopping-cart.html',
      template: './src/app/areas/shopping-cart/shopping-cart.html',
      chunks: ['pageTwo'],
      inject: "body"
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
