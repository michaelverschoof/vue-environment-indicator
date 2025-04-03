import type { Options, UserOptions } from '@/types';

/**
 * Merge default options with the provided options to ensure a full set of options.
 *
 * @param options The use-provided options.
 * @returns A merged object of set options.
 */
export function mergeOptions(options: Partial<UserOptions> = {}): Options {
    const defaultOptions: Options = {
        environment: 'dev',
        element: 'mark',
    };

    return Object.assign(defaultOptions, options);
}
