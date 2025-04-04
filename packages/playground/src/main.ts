import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { createEnvironmentIndicator } from 'environment-indicator/plugin';

const app = createApp(App);

app.use(
    createEnvironmentIndicator({
        environment: process.env.NODE_ENV,
        type: 'ribbon',
        position: 'topLeft'
    })
);

app.mount('#app');
