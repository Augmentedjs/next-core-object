const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'core-next-object.js',
    publicPath: '/dist/',
    library: "core-next-object",
    globalObject: 'this',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    'core-next-utilities': {
      commonjs: 'core-next-utilities',
      commonjs2: 'core-next-utilities',
      amd: 'core-next-utilities',
      root: 'core-next-utilities'
    },
    'lodash.bind': {
      commonjs: 'lodash.bind',
      commonjs2: 'lodash.bind',
      amd: 'lodash.bind',
      root: 'lodash.bind'
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
