var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "buffer.js",
    library: {
      name: "Buffer",
      type: "umd",
    },
  },
  target: "web",
};
