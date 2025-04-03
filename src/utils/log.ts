/**
 * Log a console warning with the plugin prefix.
 *
 * @param message The message to log.
 */
export function warn(message: string): void {
    // Ignoring this early return as setting console to undefined gives a non-catchable error
    /* v8 ignore next 3 */
    if (typeof console === 'undefined') {
        return;
    }

    console.warn('[vue-environment-indicator] ' + message);
}
