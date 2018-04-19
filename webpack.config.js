path = require('path');
module.exports = {
    resolve: {
      modules: [".", "jagda"],
    },
    entry: "./run.js",
    output: {
      path: path.resolve(__dirname, 'out'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.coffee$/,
          use: [
            { loader: "coffee-loader" }
          ]
        }
      ]
    }
};
