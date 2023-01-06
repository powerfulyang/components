const { isDevProcess } = require('@powerfulyang/utils');

const includeSite = isDevProcess || process.env.SITE === 'true';

const content = includeSite ? ['./src/**/*.tsx', './site/**/*.tsx'] : ['./src/**/*.tsx'];

module.exports = {
  content,
  // https://tailwindcss.com/docs/preflight#disabling-preflight
  corePlugins: {
    preflight: includeSite,
  },
};
