---
layout: ~/layouts/Main.astro
---

# Publishing Project

You can *hopefully* find the published version [here](http://www.laura-melo.com/astro-docs)

Project build went smoothly, at the end also shows you the page weight for each page you have.

Copied the content from the `dist` folder to the directory (`astro-docs`) in my Apache server, but since it wasn't the root folder, stuff didn't really work, styles were not properly applied and navigation was not working at all.

First thing I did after that was to add a .htaccess file copied from an existing angular project:

```
RewriteEngine On
# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# If the requested resource doesn't exist, use index.html
RewriteRule ^ /index.html

```

Didn't work at all, so then I tried moving everything to the root files, navigation started working but styles was still nowhere to be seen.

Tried adding the following configuration to `snowpack.config.js` to solve the path issue and redeploying the application:

``` js
mount: {
    src: '/dist',
    public: '/',
  },
```

But it actually broke the building of the project. Then I tried adding `root: '/astro-docs'` to `snowpack.config.js` but did not solve any of the issues.

## Layout

## Components

