const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: {
    application: './src/index.js',
    tests: './test/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      title: 'Koo Koo Island',
      template: 'src/index.html',
      excludeChunks: ['tests'],
      environment: env
    }),
    new HtmlWebpackPlugin({
      title: 'Koo Koo Island Tests',
      template: 'test/index.ejs',
      filename: 'test.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
