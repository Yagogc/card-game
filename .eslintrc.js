module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['simple-import-sort', 'react-hooks'],
  rules: {
    'simple-import-sort/imports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
}
