const path = require('path');
const nodeExternals = require('webpack-node-externals');

const rootPath = process.env.PWD;

module.exports = {
    target: 'node',
    mode: 'development',
    externals: [ nodeExternals() ],
    devtool: 'eval-source-map',
    entry: path.resolve('src', 'server.ts'),
    output: {
        filename: 'app.js',
        path: path.resolve(rootPath, 'build'),
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
        alias: {
            '~': path.resolve(rootPath, 'src'),
            assets: path.resolve(rootPath, 'assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
        ],
    },
};