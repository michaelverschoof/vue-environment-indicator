import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
    {
        extends: './packages/vue-environment-indicator/vitest.config.ts',
        test: {
            name: 'vue-environment-indicator',
            root: './packages/vue-environment-indicator'
        }
    }
]);
