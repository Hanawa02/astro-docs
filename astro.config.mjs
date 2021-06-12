export default {
  renderers: ['@astrojs/renderer-preact'],
  buildOptions: { site: 'http://www.laura-melo/astro-docs' },
  devOptions: {
    tailwindConfig: './tailwindConfig.js',
  },
};
