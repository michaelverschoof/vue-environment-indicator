import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            root: fileURLToPath(new URL('./', import.meta.url)),
            coverage: {
                exclude: [...(configDefaults.coverage.exclude ?? []), 'main.ts', '**/types.ts']
            }
        }
    })
);
