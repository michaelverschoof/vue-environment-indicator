export type Environment = 'development' | 'test' | 'staging' | 'sandbox' | 'production';
export type IndicatorType = 'ribbon' | 'block';
export type IndicatorPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type UserOptions = {
    environment: Environment;
    element?: keyof HTMLElementTagNameMap;
    type?: IndicatorType;
    position?: IndicatorPosition;
};

export type Options = Required<UserOptions>;

/**
 * Styling declarations
 */
export type BaseStyleDeclarations = Pick<
    CSSStyleDeclaration,
    | 'position'
    | 'display'
    | 'alignItems'
    | 'justifyContent'
    | 'minWidth'
    | 'padding'
    | 'textTransform'
    | 'fontWeight'
    | 'transformOrigin'
>;

export type BackgroundStyleDeclaration = Pick<CSSStyleDeclaration, 'backgroundColor'>;
export type ColorStyleDeclaration = Pick<CSSStyleDeclaration, 'color'>;
export type RotateStyleDeclaration = Pick<CSSStyleDeclaration, 'transform'>;
export type PositionStyleDeclarations = (
    | Pick<CSSStyleDeclaration, 'top'>
    | Pick<CSSStyleDeclaration, 'bottom'>
) &
    (Pick<CSSStyleDeclaration, 'left'> | Pick<CSSStyleDeclaration, 'right'>);

export type StyleDeclarations = BaseStyleDeclarations &
    BackgroundStyleDeclaration &
    ColorStyleDeclaration &
    RotateStyleDeclaration &
    PositionStyleDeclarations;
