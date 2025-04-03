/**
 * Log a console warning with the plugin prefix.
 *
 * @param message The message to log.
 */
export function warn(message: string): void {
    if (typeof console === 'undefined') {
        return;
    }

    console.warn('[vue-environment-indicator] ' + message);
}
