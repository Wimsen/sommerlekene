const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: {
        app: ["@babel/polyfill", "./app/src/index.js"],
        styles: ["./app/static/styles/styles.less"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: [/\.less$/, /\.css$/],
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./app/static/index.template.ejs",
            filename: "./index.html"
        })
    ],
    devServer: {
        proxy: {
            "/api": "http://localhost:8079"
        }
    },
    performance: {
        hints: false
    }
};
