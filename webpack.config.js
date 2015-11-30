var wp = require('webpack');

module.exports = {
  entry: {
    main:     "./themes/src/scripts/main.js",
  },
  module: {
    loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query:{
        presets: ['es2015']
      }
    }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  plugins: [
    new wp.optimize.CommonsChunkPlugin("vendor.bundle.js")
  ],
};
