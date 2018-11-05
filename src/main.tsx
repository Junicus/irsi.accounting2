import * as React from 'react';
import { History } from 'history';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'emotion-theming';
import { connect } from 'react-redux';
import { ThemeColors } from './store/layout';
import { ApplicationState } from './store';
import * as themes from './styles/theme';
import Routes from './routes';

interface PropsFromState {
    theme: ThemeColors,
    sidebarOpen: boolean
};

interface PropsFromDispatch {
    [key: string]: any
};

interface OwnProps {
    store: Store<ApplicationState>,
    history: History
};

type AllProps = PropsFromState & PropsFromDispatch & OwnProps;

class Main extends React.Component<AllProps> {
    public render() {
        const { store, history, theme } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <ThemeProvider theme={themes[theme]}>
                        <Routes />
                    </ThemeProvider>
                </ConnectedRouter>
            </Provider>
        );
    }
}

const mapStateToProps = ({ layout }: ApplicationState) => ({
    theme: layout.theme,
    sidebarOpen: layout.sidebarOpen
});

export default connect<PropsFromState, PropsFromDispatch, OwnProps, ApplicationState>(
    mapStateToProps
)(Main);