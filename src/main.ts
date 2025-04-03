import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import Indicator from './environment-indicator';

const app = createApp(App);

app.use(Indicator, { environment: process.env.NODE_ENV });

app.mount('#app');
