const { eslint } = require('@powerfulyang/lint');

module.exports = {
  ...eslint,
  overrides: eslint.overrides.map((override) => ({
    ...override,
    rules: {
      ...override.rules,
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['vite.config.ts', 'site/**/*.{ts,tsx}'],
        },
      ],
    },
  })),
};
