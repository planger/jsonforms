var loaders = require("./loaders");
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/bootstrap/jsonforms_bootstrap.ts'
    ],
    output: {
        filename: 'jsonforms.js',
        publicPath: '/assets/'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devServer: {
        contentBase: './examples'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // TODO
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/jsonforms.css',
                to:   'examples/assets/jsonforms.css'
            },
            {
                from: 'src/bootstrap/jsonforms-bootstrap.css',
                to:   'examples/assets/jsonforms-bootstrap.css'
            }
        ])
    ],
    module:{
        loaders: loaders
    }
};
