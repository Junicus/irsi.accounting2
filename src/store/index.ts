import { combineReducers, Store, createStore, Dispatch, Action, AnyAction, applyMiddleware, Reducer } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
import { History } from 'history';
import { LayoutState, layoutReducer } from './layout';
import { MenuState, menuReducer } from './menu';

export interface ApplicationState {
    layout: LayoutState,
    menu: MenuState,
    form: any
};

export interface ConnectedRouterProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
};

export const rootReducer = combineReducers<ApplicationState>({
    layout: layoutReducer,
    menu: menuReducer,
    form: reduxFormReducer
});

export default function configureStore(
    history: History,
    initialState: ApplicationState
): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools({});
    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history)))
    );

    return store;
}