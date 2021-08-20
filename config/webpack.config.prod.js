const { merge } = require('webpack-merge');

const baseWepackConfig = require('./webpack.config.base');

module.exports = merge(baseWepackConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true,
        },
      },
    },
  },
});
