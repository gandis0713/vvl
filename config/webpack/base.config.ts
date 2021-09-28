const mode = process.env.NODE_ENV || "development"

module.exports = function defaultConfig() {
  return {
    mode,
  }
};