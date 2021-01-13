const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devServer = {
  port: 4000,
  open: true,
  disableHostCheck: true,
  historyApiFallback: true,
  overlay: true,
  stats: "minimal",
  inline: true,
  compress: true,
  contentBase: "/",
};

module.exports = {
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[hash].[ext]",
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-url-loader",
          options: {
            name: "svg/[name].[ext]",
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true,
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      images: path.resolve(__dirname, "src/assets/images/"),
      components: path.resolve(__dirname, "src/components/"),
    },
  },
  devServer,
};
