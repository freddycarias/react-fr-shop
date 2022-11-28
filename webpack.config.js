const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.[hash].js',
        publicPath: "/"
    },
    mode: 'development',
    resolve:{
        extensions: ['.js','.jsx']
    },
    module:{
        rules:[
            { 
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[]name.css"
        })
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, 'dist'),
    },
    
    port:8080,
    
    },
    devServer: {
        historyApiFallback: true,
    },
    
}