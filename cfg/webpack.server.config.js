const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { DefinePlugin } = require("webpack");
const Dotenv = require("dotenv-webpack");

const NODE_ENV = process.env.NODE_ENV; // переменная окружения Node.js
const GLOABAL_CSS_REGEXP = /\.global\.css$/;
const IS_DEV = NODE_ENV === "development";

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()], // выключает добавление сторонних модулей в собранный выходной файл
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              onlyLocals: true,
            },
          },
        ],
        exclude: GLOABAL_CSS_REGEXP,
      },
      {
        test: GLOABAL_CSS_REGEXP,
        use: ["css-loader"],
      },
    ],
  },
  optimization: {
    minimize: false, // отключаем минимизацию
  },
  plugins: [
    new DefinePlugin({
      "process.env.CLIENT_ID": `'${
        IS_DEV ? process.env.CLIENT_ID_DEV : process.env.CLIENT_ID
      }'`,
      "process.env.SECRET": `'${
        IS_DEV ? process.env.SECRET_DEV : process.env.SECRET
      }'`,
      "process.env.REDIRECT": `'${
        IS_DEV ? process.env.REDIRECT_DEV : process.env.REDIRECT
      }'`,
    }),
    new Dotenv(),
  ],
};
