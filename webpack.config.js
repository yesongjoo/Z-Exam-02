const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // 정적 파일 제공 디렉토리 경로
      publicPath: "/", // 웹 페이지에서 사용하는 경로
      serveIndex: true, // 디렉토리 내용을 보여줄지 여부
      watch: true, // 파일 변경 감지 여부
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
  ],
};
