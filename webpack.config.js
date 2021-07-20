const path = require('path');

module.exports= {
    mode:'development',
    entry:  "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
      },
    module :{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',    
            }
        }]  ,
        rules: [{
            test: /\.scss?$/,
            exclude: /node_modules/,
            use:{
                loader: "style-loader",
            }
        }],
        rules: [{
            test: /\.scss?$/,
            exclude: /node_modules/,
            use:{
                loader: "css-loader",
            }
        }],
        rules: [{
            test: /\.scss?$/,
            exclude: /node_modules/,
            use:{
                loader: "sass-loader",
            }
        }],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: '/build'
    }
}