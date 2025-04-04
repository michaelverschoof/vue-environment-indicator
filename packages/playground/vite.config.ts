import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('../environment-indicator/src', import.meta.url)),
            'environment-indicator': fileURLToPath(
                new URL('../environment-indicator/src', import.meta.url)
            )
        }
    }
});
