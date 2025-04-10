export type IndicatorType = 'ribbon' | 'block';
export type IndicatorPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type UserOptions = {
    environment: string;
    element?: keyof HTMLElementTagNameMap;
    type?: IndicatorType;
    position?: IndicatorPosition;
};

export type Options = Required<UserOptions>;
