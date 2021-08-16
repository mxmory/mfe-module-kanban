const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.(ts|js)?$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env" /* to transfer any advansed ES to ES5 */,
            "@babel/preset-react",
          ], // to compile react to ES5
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "kanban",
      filename: "remoteEntry.js",
      exposes: {
        "./Kanban": "./src/bootstrap.tsx",
      },
      //   shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.REDUX_LOGGING": JSON.stringify("development"),
    }),
  ],
};
