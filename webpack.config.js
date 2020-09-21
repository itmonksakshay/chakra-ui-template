const path =require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir='dist';
module.exports ={
  entry:["babel-polyfill","./src/index.js"],
  mode:"development",
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        loader:"babel-loader",
        options:{presets:["@babel/env"]}
      },
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      }
    ]
  },
  resolve:{extensions:["*",".js",".jsx"]},
  output:{
    path:path.join(__dirname,outputDir),
    filename:"main.js"
  },
  devServer:{
    port:4000,
    hotOnly:true
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
};
