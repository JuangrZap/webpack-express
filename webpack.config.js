/** @type {import('webpack').Configuration} */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    // Identify this project
    name: 'express-server',
    entry: './src/index.ts',
    target: 'node',
    mode: NODE_ENV,
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
            },
        ],
    },
};
