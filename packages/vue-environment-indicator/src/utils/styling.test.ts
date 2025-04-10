import type { StyleDeclarations } from '@/types';
import { describe, expect, test, vi } from 'vitest';
import { getStyling } from './styling';

const mediaSpy = vi.spyOn(window, 'matchMedia').mockImplementation(
    (query) =>
        ({
            matches: false,
            media: query
        }) as MediaQueryList
);

const environment = 'test';

const baseStyling: Partial<StyleDeclarations> = {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 189, 126, 0.7)',
    minWidth: '20rem',
    padding: '0.5rem 1rem',
    textTransform: 'uppercase',
    fontWeight: '500',
    transformOrigin: 'center',
    color: 'black'
};

describe('Block Styling', () => {
    test('Returns the styling for top-left positioning', () => {
        const specificStyling: Partial<StyleDeclarations> = { top: '0', left: '0' };
        const styling = getStyling(environment, 'topLeft', 'block');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });

    test('Returns the styling for top-right positioning', () => {
        const specificStyling: Partial<StyleDeclarations> = { top: '0', right: '0' };
        const styling = getStyling(environment, 'topRight', 'block');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });

    test('Returns the styling for bottom-left positioning', () => {
        const specificStyling: Partial<StyleDeclarations> = { bottom: '0', left: '0' };
        const styling = getStyling(environment, 'bottomLeft', 'block');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });

    test('Returns the styling for bottom-right positioning', () => {
        const specificStyling: Partial<StyleDeclarations> = { bottom: '0', right: '0' };
        const styling = getStyling(environment, 'bottomRight', 'block');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });

    test('Returns the styling for dark mode', () => {
        mediaSpy.mockImplementationOnce(
            (query) =>
                ({
                    matches: true,
                    media: query
                }) as MediaQueryList
        );

        const specificStyling: Partial<StyleDeclarations> = { top: '0', left: '0', color: 'white' };
        const styling = getStyling(environment, 'topLeft', 'block');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });
});

describe('Ribbon Styling', () => {
    test('Returns the styling for top-left positioning', () => {
        const specificStyling: Partial<StyleDeclarations> = {
            top: '0',
            left: '0',
            transform: 'rotate(-45deg) translate(-30%, 30%)'
        };

        const styling = getStyling(environment, 'topLeft');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });

    test('Returns the styling for top-right positioning', () => {
        const specificStyling: Partial<StyleDeclarations> = {
            top: '0',
            right: '0',
            transform: 'rotate(45deg) translate(30%, 30%)'
        };

        const styling = getStyling(environment, 'topRight');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });

    test('Returns the styling for bottom-left positioning', () => {
        const specificStyling: Partial<StyleDeclarations> = {
            bottom: '0',
            left: '0',
            transform: 'rotate(45deg) translate(-30%, -30%)'
        };

        const styling = getStyling(environment, 'bottomLeft');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });

    test('Returns the styling for bottom-right positioning', () => {
        const specificStyling: Partial<StyleDeclarations> = {
            bottom: '0',
            right: '0',
            transform: 'rotate(-45deg) translate(30%, -30%)'
        };

        const styling = getStyling(environment, 'bottomRight');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });

    test('Returns the styling for dark mode', () => {
        mediaSpy.mockImplementationOnce(
            (query) =>
                ({
                    matches: true,
                    media: query
                }) as MediaQueryList
        );

        const specificStyling: Partial<StyleDeclarations> = {
            top: '0',
            left: '0',
            transform: 'rotate(-45deg) translate(-30%, 30%)',
            color: 'white'
        };

        const styling = getStyling(environment, 'topLeft');

        expect(styling).toEqual(Object.assign({}, baseStyling, specificStyling));
    });
});
