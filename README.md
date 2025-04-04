# Vue Environment Indicator

> A tiny Vue plugin to show which environment you are working in.

- 💡 Intuitive
- 🔑 Type Safe
- ⚙️ Zero config needed
- 📦 Extremely light

## Installation

```bash
# or pnpm or yarn
npm install vue-environment-indicator
```

## Usage

### Install the plugin

Create an Environment Indicator and pass it to your app:

```js
// Vue 3
import { createApp } from 'vue';
import { createEnvironmentIndicator } from 'vue-environment-indicator';
import App from './App.vue';

const environmentIndicator = createEnvironmentIndicator();

const app = createApp(App);
app.use(environmentIndicator);
app.mount('#app');
```

## Configuration

You can pass along configuration to the indicator. The below example shows all available options with their default values:

```js
const environmentIndicator = createEnvironmentIndicator({
    // The environment value you want to display. You can use process.env.NODE_ENV for example.
    environment: 'development',
    // The HTML element to create.
    element: 'mark',
    // The type of indicator. Options are "ribbon" and "block".
    type: 'ribbon',
    // The position of the indicator. Options are "topLeft", "topRight", "bottomLeft" and "bottomRight".
    position: 'topLeft'
});
```

## License

[MIT](http://opensource.org/licenses/MIT)
