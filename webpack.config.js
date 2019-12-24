var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  mode: "development",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        {
          loader: "ts-loader"
        },
      ],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'dist'
          },
        },
      ],
    }]
  }
  // externals: {
  //   react: 'react',
  //   reactDom: 'react-dom'
  // }
};
