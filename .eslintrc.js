module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'linebreak-style': 0,
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'import/prefer-default-export': 'off',
  },
};
