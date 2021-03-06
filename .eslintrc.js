module.exports = {
  'rules': {
    'react/jsx-no-bind': [2, { 'ignoreRefs': true }],
    'semi': [2, 'never'],
    'global-require': 0,
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true
  },
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'plugins': ['react'],
}
