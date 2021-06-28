module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'rules': {
    'max-len': ['error', 1000],
    'require-jsdoc': 0,
  },
};
