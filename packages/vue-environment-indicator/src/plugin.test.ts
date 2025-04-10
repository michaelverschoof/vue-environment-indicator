import { mount } from '@vue/test-utils';
import { expect, test, vi } from 'vitest';
import { createEnvironmentIndicator } from './plugin';

vi.spyOn(window, 'matchMedia').mockImplementation(
    (query) =>
        ({
            matches: false,
            media: query
        }) as MediaQueryList
);

const TestComponent = { template: '<h1>Testing application</h1><p>Hello world!</p>' };
const environment = 'test';

test('Registers the plugin correctly', () => {
    mount(TestComponent, {
        global: {
            plugins: [[createEnvironmentIndicator({ environment: environment })]]
        }
    });

    const body = document.querySelector('body');
    expect(body).not.toBeNull();

    const indicators = body!.querySelectorAll('mark');
    expect(indicators.length).toBe(1);

    const indicator = indicators[0];
    expect(indicator).not.toBeNull();
    expect(indicator.innerText).toBe(environment);

    // Clean up the html as we inject it via the plugin
    body!.innerHTML = '';
});

test('Logs a warning when there is no body and does not attach the indicator', () => {
    vi.spyOn(document, 'querySelector').mockImplementationOnce(() => null);
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(vi.fn());

    mount(TestComponent, {
        global: {
            plugins: [[createEnvironmentIndicator({ environment: environment })]]
        }
    });

    expect(consoleSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledWith(
        '[vue-environment-indicator] No body element found to attach to.'
    );

    // The body styll exists as we only mocked the query selector
    const body = document.querySelector('body');
    expect(body).not.toBeNull();

    const indicators = body!.querySelectorAll('mark');
    expect(indicators.length).toBe(0);

    // Clean up the html as we inject it via the plugin
    body!.innerHTML = '';
});
