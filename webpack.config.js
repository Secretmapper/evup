var wp = require('webpack');

module.exports = {
    entry: {
        main:     "./themes/src/scripts/main.js",
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
        new wp.optimize.CommonsChunkPlugin("vendor.bundle.js")
    ],
};
