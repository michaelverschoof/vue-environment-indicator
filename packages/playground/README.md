# Vue Environment Indicator

## How to test the plugin

In order to test the plugin as an external package, you will need to use an [NPM link](https://docs.npmjs.com/cli/v8/commands/npm-link).

To do this, go to the plugin directory using your terminal. There you need to create a global symlink. From the main project directory it would be:

```bash
cd packages/vue-environment-indicator
npm link
```

This registers a global symlink that you can use as if it were an external package. So next we'll go to the playground directory and link to the global package.

```bash
cd ../playground
npm link vue-environment-indicator
```

That's it. You can now use the local version of the package in the playground to test it.
