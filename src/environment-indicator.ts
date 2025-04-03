import type { App } from 'vue';
import type { UserOptions } from './types';
import { warn } from './utils/log';
import { mergeOptions } from './utils/options';
import { getStyling } from './utils/styles';

export default {
    install: (app: App, userOptions: UserOptions) => {
        const body = document.querySelector('body');
        if (!body) {
            warn('No body element found to attach to.');
            return;
        }

        const options = mergeOptions(userOptions);

        const indicator: HTMLElement = document.createElement(options.element);
        indicator.style.cssText = getStyling(options.position, options.type !== 'block');
        indicator.innerText = options.environment;

        body.appendChild(indicator);
    }
};
