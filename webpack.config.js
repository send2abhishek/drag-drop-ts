const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts", // starting file of the app
  output: {
    filename: "bundle.js", // output file name
    path: path.resolve(__dirname, "dist"), // output directory
    publicPath: "dist",
  },
  //devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/, // grab the ts file
        use: "ts-loader", // use ts loader to load ts files
        exclude: /node_modules/, // exclude node modules
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // what are the files allowed
  },
};
