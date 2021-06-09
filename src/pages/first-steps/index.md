---
layout: ~/layouts/Main.astro
---

# First Steps

## Setting Up

I created the initial project using the Docs template, nothing was changed so far.

## Routing
The routing in itself is quite simple using the folder structure. The only issue was that I thought the side bar was updated automatically (John Snow feelings), for that you need to go to `/src/config.ts`.

If you did like me and was using a .astro file and couldn't find your contents in the right top part of the page, at the moment I didn't learn how to do it with the .astro file, but the .md file will give you that automatically following your markdown structure.

## Importing Elements
The relative path for the imports was making me unhappy, since most of the time I just copy the index.astro from the pages folder, and then need to adjust the depth of the import like `../../../layout/etc`.

Thankfully Matthew explained me that I need to add a [snowpack.config.js](https://www.snowpack.dev/reference/configuration#alias) to solve this. Follow the configuration I used:

```js
  module.exports = {
    alias: {
      components: './src/components',
      '~': './src',
    },
  };
```

PS: In the documentation from snowpack they use `export default` but if you have `node@v14.16.1` installed like me (or just a non compatible version) it will give you the error:

```
  Failed to load "D:\Dev\astro-docs\snowpack.config.js"!
  ESM format is not natively supported in "node@v14.16.1".
  Please use CommonJS or upgrade to an LTS version of node above "node@12.17.0".
  (node:37388) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
  (Use `node --trace-warnings ...` to show where the warning was created)
  (node:37388) UnhandledPromiseRejectionWarning: D:\Dev\astro-docs\snowpack.config.js:1
```

All you have to do is replace `export default` with `module.exports =` and it should work fine!
    