import type { App } from 'vue';

type UserOptions = {
    environment: string;
    element?: keyof HTMLElementTagNameMap;
};

type Options = Required<UserOptions>;

export default {
    install: (app: App, options: UserOptions) => {
        const body = document.querySelector('body');
        if (!body) {
            warn('No body element found to attach to.');
            return;
        }
        body.style.height = '150vh';

        const mergedOptions = mergeOptions(options);

        const indicator: HTMLElement = document.createElement(mergedOptions.element);
        indicator.style.cssText =
            'display: flex; position: fixed; top: 0; left: 0; min-width: 20rem;' +
            'transform: rotate(-45deg) translate(-30%, 25%); padding: 0.5rem 1rem;' +
            'align-items: center; justify-content: center; transform-origin: center;' +
            'background-color: rgba(255, 255, 0, 0.5);';

        const displayText: HTMLSpanElement = document.createElement('span');
        displayText.innerText = mergedOptions.environment;
        // displayText.style.cssText = '';

        indicator.appendChild(displayText);
        body.appendChild(indicator);
    },
};

/**
 * Merge default options with the provided options to ensure a full set of options.
 *
 * @param options The use-provided options.
 * @returns A merged object of set options.
 */
function mergeOptions(options: UserOptions): Options {
    const defaultOptions: Options = {
        environment: 'dev',
        element: 'mark',
    };

    return Object.assign(defaultOptions, options);
}

/**
 * Log a console warning with the plugin prefix.
 *
 * @param message The message to log.
 */
function warn(message: string): void {
    if (typeof console === 'undefined') {
        return;
    }

    console.warn('[vue-environment-indicator] ' + message);
}
