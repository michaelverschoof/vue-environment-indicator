import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            'vue-environment-indicator': fileURLToPath(
                new URL('../vue-environment-indicator/main.ts', import.meta.url)
            ),
            '@': fileURLToPath(new URL('../vue-environment-indicator/src', import.meta.url))
        }
    }
});
