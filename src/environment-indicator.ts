import type { App } from 'vue';
import type { UserOptions } from './types';
import { warn } from './utils/log';
import { mergeOptions } from './utils/options';

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
        displayText.style.cssText = 'text-transform: uppercase;';

        indicator.appendChild(displayText);
        body.appendChild(indicator);
    },
};
