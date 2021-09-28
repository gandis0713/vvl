const path = require('path');
const defaultConfig = require('./base.config');

function buildConfig() {
    const config = defaultConfig();
    config.entry = './src/index.ts';
    config.output = {
        filename: 'vvl.js',
        path: path.resolve(__dirname, '../../builds'),
    };

    return config;
};

module.exports = buildConfig();