module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "rc-slider.js",
        libraryTarget: "var",
        library: "RcSlider"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    }
};