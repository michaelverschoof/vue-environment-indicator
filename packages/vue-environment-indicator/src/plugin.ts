import type { Options, UserOptions } from '@/types';
import { warn } from '@/utils/log';
import { mergeOptions } from '@/utils/options';
import { getStyling } from '@/utils/styling';
import type { Plugin } from 'vue';

export function createEnvironmentIndicator(userOptions: UserOptions): Plugin {
    const EnvironmentIndicatorPlugin: Plugin = {
        install: () => {
            const body = document.querySelector('body');
            if (!body) {
                warn('No body element found to attach to.');
                return;
            }

            const options: Options = mergeOptions(userOptions);

            const indicator = document.createElement(options.element);
            indicator.innerText = options.environment;

            const styling = getStyling(options.environment, options.position, options.type);
            for (const prop in styling) {
                indicator.style[<keyof typeof styling>prop] = styling[<keyof typeof styling>prop];
            }

            body.appendChild(indicator);
        }
    };

    return EnvironmentIndicatorPlugin;
}
