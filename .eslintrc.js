module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'arrow-parens': [2, 'always'],
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
  }
}