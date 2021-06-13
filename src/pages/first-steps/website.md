# Creating a web site

## SEO

Trying to understand how the content part works, and seeing if I can pass custom values for meta tags values.

Don't forget to use the layout in your new page.

## Integrating with Tailwind

The documentation guides properly, only missing the reminder to add the global.css referece in the head of the layout(s)

## Nested Vue Components

I have this Header component in vue that has a fake logo component inside it (also .vue).
If I simply remove the FakeLogo component declaration inside the template, it works, but with the FakeLogo it gives me a Invalid value used as weak map key error.

TheHeader.vue
```vue
<template>
  <nav class="navbar">
    <div><FakeLogo /></div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FakeLogo from './FakeLogo.vue';

export default defineComponent({
  components: { FakeLogo },
  name: 'TheHeader',
});
</script>

<style scoped></style>
```


FakeLogo.vue
```vue
<template>
  <p>fake logo</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FakeLogo',
});
</script>

<style scoped></style>
```

The Error:
```
TypeError: Invalid value used as weak map key
    at WeakMap.set (<anonymous>)
    at normalizePropsOptions (D:\Dev\astro-docs\node_modules\@vue\runtime-core\dist\runtime-core.cjs.js:3563:15)
    at createComponentInstance (D:\Dev\astro-docs\node_modules\@vue\runtime-core\dist\runtime-core.cjs.js:6939:23)
    at renderComponentVNode (D:\Dev\astro-docs\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:159:22)
    at Object.ssrRenderComponent (D:\Dev\astro-docs\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:487:12)
    at ssrRender (/_astro/src/components/website/TheHeader.vue.js:16:19)
    at renderComponentSubTree (D:\Dev\astro-docs\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:225:13)
    at renderComponentVNode (D:\Dev\astro-docs\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:176:16)
    at renderVNode (D:\Dev\astro-docs\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:266:22)
    at renderComponentSubTree (D:\Dev\astro-docs\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:231:13)
    at renderComponentVNode (D:\Dev\astro-docs\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:176:16)
    at Object.renderToString (D:\Dev\astro-docs\node_modules\@vue\server-renderer\dist\server-renderer.cjs.js:415:26)
    at Object.renderToStaticMarkup (/_snowpack/pkg/@astrojs.renderer-vue.server.v0.1.1.js:13:32)
    at eval (/_snowpack/pkg/astro.dist.internal.__astro_component.v0.13.1.js:91:35)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async Promise.all (index 0)
    at Object.h (/_snowpack/pkg/astro.dist.internal.h.v0.13.1.js:41:20)
```
