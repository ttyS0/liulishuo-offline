const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'liulishuo-main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: [ { loader: "babel-loader", options: { presets:["@babel/preset-env", "@babel/preset-react"] } } ] }
    ]
  }
};

