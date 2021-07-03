const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./index",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/env",
                                "@babel/react",
                                "@babel/typescript"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
        alias: {
            'react-native$': 'react-native-web'
        }
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};