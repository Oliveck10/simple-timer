module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
      'no-console': 0,
      'no-else-return': 0,
      'no-alert': 0,
      'new-cap': 0,
      'no-unused-vars': 0,
      'prefer-template': 0,
      'react/no-string-refs': 0,
  }
};
