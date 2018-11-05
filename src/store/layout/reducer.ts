import { Reducer } from 'redux';
import { LayoutState, LayoutActionTypes } from './types';

const initialState: LayoutState = {
    theme: 'light',
    sidebarOpen: true
};

const reducer: Reducer<LayoutState> = (state = initialState, action) => {
    switch (action.type) {
        case LayoutActionTypes.SET_THEME: {
            return { ...state, theme: action.payload }
        }
        case LayoutActionTypes.TOGGLE_SIDEBAR: {
            return { ...state, sidebarOpen: !state.sidebarOpen }
        }
        default: {
            return state;
        }
    }
}

export { reducer as layoutReducer };