const { merge } = require('webpack-merge');

const baseWepackConfig = require('./webpack.config.base');

module.exports = merge(baseWepackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: {
    children: false,
  },
});
