module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    semi: [
      'error', 'never'
    ],
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: [
          '**/*.test.js*', '**/*webpack.*'
        ],
      },
    ],
    'eol-last': 2,
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
  },
}
