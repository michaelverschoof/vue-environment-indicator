import { describe, expect, test } from 'vitest';
import { getStyling } from './styles';

const baseStyling = [
    'position: fixed',
    'display: flex',
    'align-items: center',
    'justify-content: center',
    'background: rgba(255, 255, 0, 0.7)',
    'min-width: 20rem',
    'padding: 0.5rem 1rem',
    'text-transform: uppercase',
    'font-weight: 500'
];

describe('Block Styling', () => {
    test('Returns the styling for top-left positioning', () => {
        const specificStyling = ['top: 0', 'left: 0'];
        const styling = getStyling('topLeft', false);

        expect(styling.split('; ')).toEqual([...baseStyling, ...specificStyling]);
    });

    test('Returns the styling for top-right positioning', () => {
        const specificStyling = ['top: 0', 'right: 0'];
        const styling = getStyling('topRight', false);

        expect(styling.split('; ')).toEqual([...baseStyling, ...specificStyling]);
    });

    test('Returns the styling for bottom-left positioning', () => {
        const specificStyling = ['bottom: 0', 'left: 0'];
        const styling = getStyling('bottomLeft', false);

        expect(styling.split('; ')).toEqual([...baseStyling, ...specificStyling]);
    });

    test('Returns the styling for bottom-right positioning', () => {
        const specificStyling = ['bottom: 0', 'right: 0'];
        const styling = getStyling('bottomRight', false);

        expect(styling.split('; ')).toEqual([...baseStyling, ...specificStyling]);
    });
});

describe('Ribbon Styling', () => {
    test('Returns the styling for top-left positioning', () => {
        const specificStyling = [
            'top: 0',
            'left: 0',
            'transform: rotate(-45deg) translate(-30%, 30%)',
            'transform-origin: center'
        ];

        const styling = getStyling('topLeft');

        expect(styling.split('; ')).toEqual([...baseStyling, ...specificStyling]);
    });

    test('Returns the styling for top-right positioning', () => {
        const specificStyling = [
            'top: 0',
            'right: 0',
            'transform: rotate(45deg) translate(30%, 30%)',
            'transform-origin: center'
        ];

        const styling = getStyling('topRight');

        expect(styling.split('; ')).toEqual([...baseStyling, ...specificStyling]);
    });

    test('Returns the styling for bottom-left positioning', () => {
        const specificStyling = [
            'bottom: 0',
            'left: 0',
            'transform: rotate(45deg) translate(-30%, -30%)',
            'transform-origin: center'
        ];

        const styling = getStyling('bottomLeft');

        expect(styling.split('; ')).toEqual([...baseStyling, ...specificStyling]);
    });

    test('Returns the styling for bottom-right positioning', () => {
        const specificStyling = [
            'bottom: 0',
            'right: 0',
            'transform: rotate(-45deg) translate(30%, -30%)',
            'transform-origin: center'
        ];

        const styling = getStyling('bottomRight');

        expect(styling.split('; ')).toEqual([...baseStyling, ...specificStyling]);
    });
});
