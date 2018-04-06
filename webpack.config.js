module.exports = {
    entry: './src/checkout.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};