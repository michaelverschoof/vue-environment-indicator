import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
    {
        extends: './packages/environment-indicator/vitest.config.ts',
        test: {
            name: 'environment-indicator',
            root: './packages/environment-indicator'
        }
    }
]);
