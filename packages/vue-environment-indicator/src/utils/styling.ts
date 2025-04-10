import type { IndicatorPosition } from '@/types';

type StyleOptions = Record<string, string | number>;

/** The base ribbon style */
const base: StyleOptions = {
    position: 'fixed',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    background: 'rgba(255, 255, 0, 0.7)', // FIXME: Different backgrounds per environment
    'min-width': '20rem',
    padding: '0.5rem 1rem',
    'text-transform': 'uppercase',
    'font-weight': '500'
};

/** Generic positions for the indicators */
const positions: Record<IndicatorPosition, StyleOptions> = {
    topLeft: { top: 0, left: 0 },
    topRight: { top: 0, right: 0 },
    bottomLeft: { bottom: 0, left: 0 },
    bottomRight: { bottom: 0, right: 0 }
};

/** The rotation styling for the different positions */
const rotations: Record<IndicatorPosition, StyleOptions> = {
    topLeft: { transform: 'rotate(-45deg) translate(-30%, 30%)' },
    topRight: { transform: 'rotate(45deg) translate(30%, 30%)' },
    bottomLeft: { transform: 'rotate(45deg) translate(-30%, -30%)' },
    bottomRight: { transform: 'rotate(-45deg) translate(30%, -30%)' }
};

/**
 * Get the ribbon styling for the provided position.
 *
 * @param position The position of the ribbon.
 * @returns The styling string for the ribbon.
 */
export function getStyling(position: IndicatorPosition, rotate: boolean = true): string {
    const positionedStyling = Object.assign({}, base, positions[position]);
    if (!rotate) {
        return createCssText(positionedStyling);
    }

    const rotatedStyling = Object.assign(positionedStyling, rotations[position], {
        'transform-origin': 'center'
    });
    return createCssText(rotatedStyling);
}

/**
 * Transform a style object into CSS string.
 *
 * @param style The style object to transform.
 * @returns The string representation of the style object.
 */
function createCssText(style: StyleOptions): string {
    return Object.entries(style)
        .reduce((result: string[], current: [string, string | number]) => {
            result.push(current.join(': '));
            return result;
        }, [])
        .join('; ');
}
