export type UserOptions = {
    environment: string;
    element?: keyof HTMLElementTagNameMap;
};

export type Options = Required<UserOptions>;
