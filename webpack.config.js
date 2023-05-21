const path = require('path'); // Element from Node
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // It's the entry point of our app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js', // The name of the output file
    //assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // Allow us to say what extensions we're going to use
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css|.styl$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
        ]
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2)$/i,  // Tipos de fuentes a incluir
        type: 'asset/resource',  // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',  // Directorio de salida
        },
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true, // To inject the elements
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, './src/assets/images'), // Source of the elements
        to: 'assets/images', // Where to ouput the elements
      }]
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CSSMinimizerPlugin(), // CSS Optimization
      new TerserPlugin(), // JavaScript Optimization
    ]
  },
}; // This is the configuration object
