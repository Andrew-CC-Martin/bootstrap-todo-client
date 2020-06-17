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
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
    "no-confusing-arrow": "off",
  },
}
