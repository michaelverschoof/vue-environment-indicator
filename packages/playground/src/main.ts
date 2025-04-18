import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { createEnvironmentIndicator } from 'vue-environment-indicator';

const app = createApp(App);

app.use(
    createEnvironmentIndicator({
        environment: 'development',
        element: 'mark',
        type: 'ribbon',
        position: 'topLeft'
    })
);

app.mount('#app');
