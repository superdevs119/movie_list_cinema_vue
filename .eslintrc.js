module.exports = {
  root: true,

  extends: [
    'standard',
    'plugin:vue/essential'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  plugins: [
    'html',
    'standard',
    'vue'
  ],

  env: {
    browser: true,
    node: true
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  'extends': [
    'standard',
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
}
