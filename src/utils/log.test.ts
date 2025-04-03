import { afterAll, beforeEach, expect, test, vi } from 'vitest';
import { warn } from './log';

const consoleSpy = vi.spyOn(console, 'warn');

beforeEach(() => {
    vi.clearAllMocks();
});

afterAll(() => {
    vi.restoreAllMocks();
});

test('Logs a warning with the provided message', () => {
    warn('Testing message');

    expect(consoleSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledWith('[vue-environment-indicator] Testing message');
});
