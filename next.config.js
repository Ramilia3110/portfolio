// next.config.js
module.exports = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // If your custom layout is in the "src/app" directory, specify it here:
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};
