const { isDevProcess } = require('@powerfulyang/utils');

const content = isDevProcess ? ['./src/**/*.tsx', './site/**/*.tsx'] : ['./src/**/*.tsx'];

module.exports = {
  content,
  // https://tailwindcss.com/docs/preflight#disabling-preflight
  corePlugins: {
    preflight: isDevProcess,
  },
};
