const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const path = require("path");
const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist"),
  assets: "./assets/",
};
const PAGES_DIR = `${PATHS.src}`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".html"));
const STYLES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".css"));

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    contacts: "./src/contacts.js",    
  },
  module: {
    rules: [
      { test: /\.html$/, use: "html-loader" },
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
 
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: (pathData) => {
      return pathData.chunk.name === "index"
        ? "[name].[contenthash].js"
        : "./[name]/[name].[contenthash].js";
    },
    assetModuleFilename: 'img/[name][ext]'
  },
  plugins: [
    ...PAGES.map((page) =>
      page !== "index.html"
        ? new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.slice(0, -5)}/index.html`,
          })
        : new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src", "index.html"),
          })
    ),
    new MiniCssExtractPlugin({
      filename: (pathData) => {
        return pathData.chunk.name === "index"
          ? "[name].[contenthash].css"
          : "./[name]/[name].[contenthash].css";
      },
    }),
  ],
};
