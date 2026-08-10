import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  {
    ignores: ['.next/**', '.vercel/**', 'node_modules/**']
  },
  ...nextVitals,
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'react/display-name': 'off'
    }
  }
]

export default eslintConfig
