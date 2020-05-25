const path = require("path");

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname,"./src"),
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          reducers: path.resolve(__dirname, './src/reducers')
        }
      },
    output: {
        filename: "bundle.js"
    }
}