export type MenuArea = 'main' | 'settings' | 'context';

export enum MenuActionTypes {
    SET_MENU = '@@menu/SET_THEME',
};

export interface MenuSection {
    readonly name: MenuArea,
    readonly items: MenuItem[]
}

export interface MenuItem {
    readonly icon?: string,
    readonly url: string,
    readonly text: string
}

export interface MenuState {
    readonly context?: MenuSection,
    readonly main: MenuSection,
    readonly settings?: MenuSection
};