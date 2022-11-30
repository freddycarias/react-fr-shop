const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { dirname } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.[hash].js',
        publicPath: "/"
    },
    mode: 'development',
    resolve:{
        extensions: ['.js','.jsx'],
        alias: {
            "@components": path.resolve(__dirname,"./src/components/"),
            "@containers": path.resolve(__dirname,"./src/containers/"),
            "@pages": path.resolve(__dirname,"./src/pages/"),
            "@routes": path.resolve(__dirname,"./src/routes/"),
            "@styles": path.resolve(__dirname,"./src/styles/"),
            "@icons": path.resolve(__dirname,"/src/assets/icons/"),
            "@logos": path.resolve(__dirname,"/src/assets/logos/")


        }
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
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset"
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
        historyApiFallback: true,
    },
    
}