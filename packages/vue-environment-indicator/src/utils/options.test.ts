import type { Options, UserOptions } from '@/types';
import { expect, test } from 'vitest';
import { mergeOptions } from './options';

const defaultOptions: Options = {
    environment: 'development',
    element: 'mark',
    type: 'ribbon',
    position: 'topLeft'
};

test('Returns the default options when nothing is provided', () => {
    const options = mergeOptions();
    expect(options).toEqual(defaultOptions);
});

test('Returns the same options as default when the same values are provided', () => {
    const options = mergeOptions(defaultOptions);
    expect(options).toEqual(defaultOptions);
});

test('Returns the provided options if they are all different', () => {
    const userOptions: UserOptions = {
        environment: 'staging',
        element: 'div',
        type: 'block',
        position: 'bottomRight'
    };

    const options = mergeOptions(userOptions);
    expect(options).toEqual(userOptions);
});

test('Returns the merged options when some are provided', () => {
    const userOptions: UserOptions = {
        environment: 'staging',
        position: 'bottomRight'
    };

    const options = mergeOptions(userOptions);
    expect(options.environment).toBe(userOptions.environment);
    expect(options.position).toBe(userOptions.position);
    expect(options.element).toBe(defaultOptions.element);
    expect(options.type).toBe(defaultOptions.type);
});
