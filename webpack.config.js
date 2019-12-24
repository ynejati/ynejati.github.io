var path = require("path");
var webpack = require("webpack");
var TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: ["./src/index"],
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "dist"
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin()]
  }
};
