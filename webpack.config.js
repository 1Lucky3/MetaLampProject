const fs = require('fs')
const path = require('path');
const ProvidePlugin = require('jquery');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const StyleLoader = require('style-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))



module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    /** Будет запускать сервер на localhost:8080 в этой папке*/
    contentBase: './dist',
  },
  watch: true,
  optimization: {
    minimize: false
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new CleanWebpackPlugin(),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`
    }))
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
        // npm install babel-loader @babel/core @babel/preset-env -D
      },
      /** CSS */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        // npm i style-loader css-loader -D
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      /** SCSS/SAAS */
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        // npm i style-loader css-loader sass sass-loader -D
      },
      /** Картинки */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[hash]-[name].[ext]',
        }
      },
      /** Шрифты */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
        }
      },
      /** Файлы CSV */
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
        // npm i csv-loader -D
      },
      /** Файлы XML */
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
        // npm i xml-loader -D 
      },
    ],
  },
}