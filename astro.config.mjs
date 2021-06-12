/* to run the test properly, after the first npm install 
add the renderer for vue ('@astrojs/renderer-vue') to the renderers list, 
and then re run the app (you can also run npm install again and it should still have the same effect) */

export default {
  renderers: ['@astrojs/renderer-preact'],
  buildOptions: { site: 'http://www.laura-melo/astro-docs' },
  devOptions: {
    tailwindConfig: './tailwindConfig.js',
  },
};
