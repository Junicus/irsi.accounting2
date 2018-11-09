import { Reducer } from 'redux';
import { MenuState, MenuActionTypes, MenuSection } from './types';

const mainMenu: MenuSection = {
    name: "main",
    items: [
        { icon: 'fa fa-link', text: 'Home', url: '/' },
        { icon: 'fa fa-link', text: 'Convert Ledger', url: '/ledger-convert' }
    ]
}

const initialState: MenuState = {
    main: mainMenu,
    settings: undefined,
    context: undefined
};

const reducer: Reducer<MenuState> = (state = initialState, action) => {
    switch (action.type) {
        case MenuActionTypes.SET_MENU: {
            return { ...state, context: action.payload }
        }
        default: {
            return state;
        }
    }
}

export { reducer as menuReducer };