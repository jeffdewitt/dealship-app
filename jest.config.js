module.exports = {
  'verbose': true,
  'modulePaths': [
    '<rootDir>/app/'
  ],
  'transform': {'.*': '<rootDir>/node_modules/jest-css-modules'},
  "setupTestFrameworkScriptFile": "<rootDir>/enzymeConfig.js",
}
