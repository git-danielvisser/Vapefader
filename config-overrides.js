module.exports = function override(config, env) {
 
  // https://webpack.js.org/loaders/worker-loader/
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: "worker-loader" },
  });

  return config;
};
