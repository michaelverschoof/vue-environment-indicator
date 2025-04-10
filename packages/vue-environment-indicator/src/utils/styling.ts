import type {
    BackgroundStyleDeclaration,
    BaseStyleDeclarations,
    ColorStyleDeclaration,
    Environment,
    IndicatorPosition,
    IndicatorType,
    PositionStyleDeclarations,
    RotateStyleDeclaration,
    StyleDeclarations
} from '@/types';

/** The base indicator style */
const base: BaseStyleDeclarations = {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '20rem',
    padding: '0.5rem 1rem',
    textTransform: 'uppercase',
    fontWeight: '500',
    transformOrigin: 'center'
};

/** Colors for the indicator */
const backgrounds: Record<Environment, BackgroundStyleDeclaration> = {
    development: { backgroundColor: 'rgba(0, 189, 126, 0.7)' },
    test: { backgroundColor: 'rgba(0, 189, 126, 0.7)' },
    staging: { backgroundColor: 'rgba(255, 160, 0, 0.7)' },
    sandbox: { backgroundColor: 'rgba(255, 100, 0, 0.7)' },
    production: { backgroundColor: 'rgba(255, 40, 0, 0.7)' }
};

/** Generic positions for the indicators */
const positions: Record<IndicatorPosition, PositionStyleDeclarations> = {
    topLeft: { top: '0', left: '0' },
    topRight: { top: '0', right: '0' },
    bottomLeft: { bottom: '0', left: '0' },
    bottomRight: { bottom: '0', right: '0' }
};

/** The rotation styling for the different positions */
const rotations: Record<IndicatorPosition, RotateStyleDeclaration> = {
    topLeft: { transform: 'rotate(-45deg) translate(-30%, 30%)' },
    topRight: { transform: 'rotate(45deg) translate(30%, 30%)' },
    bottomLeft: { transform: 'rotate(45deg) translate(-30%, -30%)' },
    bottomRight: { transform: 'rotate(-45deg) translate(30%, -30%)' }
};

/**
 * Get the styling for the indicator.
 *
 * @param environment The environment to run in. This determines the color.
 * @param position The position of the indicator.
 * @param type The type of indicator to show. Defaults to 'ribbon'.
 * @returns The styling string for the indicator.
 */
export function getStyling(
    environment: Environment,
    position: IndicatorPosition,
    type: IndicatorType = 'ribbon'
): StyleDeclarations {
    const styling: StyleDeclarations = Object.assign(
        {},
        base,
        backgrounds[environment],
        positions[position],
        getPreferredColor()
    );

    if (type !== 'ribbon') {
        return styling;
    }

    return Object.assign(styling, rotations[position]);
}

/**
 * Get the text color based on the window's preferred color scheme.
 *
 * @returns Either 'black' or 'white' for text color.
 */
function getPreferredColor(): ColorStyleDeclaration {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    return { color: prefersDark.matches ? 'white' : 'black' };
}
