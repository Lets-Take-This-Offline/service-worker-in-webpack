### How to make a service worker work with webpack

If you've ever tried to use webpack plus a service worker outside of a framework, chances are you ended up very frustrated. It can seem like a service worker _just won't work_ with webpack.

Good news! I'm here to tell you that that isn't so! A service worker can certainly work with webpack, with just a few tweaks to our webpack config. In this post, I'll show you all you need.

Let's start with a simple webpack config as a reference.

```
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```
<sub>Credit: [Devin Clark](link)</sub>

In this webpack config we are telling webpack the entry point is our `index.js` file, and telling it to bundle everything into a `dist` directory, and all our JavaScript (in this case, only the one file) should be bundled in the `bundle.js` file.

This alone won't work for a service worker. EXPLAIN WHY HERE

Let's do a little tweak to our config to get it up and running for a service worker.

```
const path = require('path');

const ClientConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

const ServiceWorkerConfig = {
    target: 'webworker',
    entry: './serviceworker.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'serviceworker.js'
    }
};

module.exports = [ ClientConfig, ServiceWorkerConfig ];
```

You'll notice that we now have a config for both our client code and our service worker code. This is important because we need to specify a target of webworker in order for webpack to properly build our service worker. Also, since we now have two configs, we'll move `module.exports` down to the bottom and convert it to an array.

And that's it! Now you'll be able to use webpack and a service worker in harmony.