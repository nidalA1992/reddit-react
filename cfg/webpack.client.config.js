const path = require("path");
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV; // переменная окружения Node.js
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";
const GLOABAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGINS = [
  new CleanWebpackPlugin(),
  new HotModuleReplacementPlugin(),
];
const COMMON_PLUGINS = [
  new DefinePlugin({
    "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'`,
    "process.env.SECRET": `'${process.env.SECRET}'`,
    "process.env.REDIRECT": `'${process.env.REDIRECT}'`,
  }),
];

function setupDevTool() {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
}

function getEntries() {
  if (IS_PROD) {
    return [path.resolve(__dirname, "../src/client/index.tsx")];
  }

  return [
    path.resolve(__dirname, "../src/client/index.tsx"),
    "webpack-hot-middleware/client?path=http://localhost:4001/static/__webpack_hmr",
  ];
}

module.exports = {
  resolve: {
    // разрешить следующие разрешения
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom",
    },
  },
  mode: NODE_ENV ? NODE_ENV : "development", // переключение dev/prod билда
  entry: getEntries(),
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
    publicPath: "/static/",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        exclude: GLOABAL_CSS_REGEXP,
      },
      {
        test: GLOABAL_CSS_REGEXP,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: setupDevTool(),
  plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
};
