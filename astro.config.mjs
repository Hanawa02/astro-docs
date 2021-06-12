export default {
  renderers: ['@astrojs/renderer-preact', '@astrojs/renderer-vue'],
  buildOptions: { site: 'http://www.laura-melo/astro-docs' },
  devOptions: {
    tailwindConfig: './tailwindConfig.js',
  },
};
