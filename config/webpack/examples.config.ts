const defaultConfig = require('./base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function examplesConfig() {
    const config = defaultConfig();
    config.entry = './examples/index.ts';
    config.devServer = {
        port: 9000,
        hot: true,
        open: true
    };
    config.plugins = [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
    })];

    return config;
};

module.exports = examplesConfig();