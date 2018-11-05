import { combineReducers, Store, createStore, Dispatch, Action, AnyAction, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { LayoutState, layoutReducer } from './layout';

export interface ApplicationState {
    layout: LayoutState
};

export interface ConnectedRouterProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
};

export const rootReducer = combineReducers<ApplicationState>({
    layout: layoutReducer
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