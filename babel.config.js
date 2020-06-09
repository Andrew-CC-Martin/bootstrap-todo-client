module.exports = {
  /** Note: This config mirrors the config inside webpack,
   * allowing jest to use ES6 features from its own NodeJS environment.
   */
  presets: ['@babel/preset-env', '@babel/preset-react'],
}
