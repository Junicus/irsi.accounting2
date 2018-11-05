import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../store';
import { ThemeColors } from '../store/layout/types';
import * as layoutActions from '../store/layout/actions';
import { Dispatch } from 'redux';

interface PropsFromState {
    theme: ThemeColors,
    sidebarOpen: boolean
};

interface PropsFromDispatch {
    setTheme: typeof layoutActions.setTheme,
    toggleSidebar: typeof layoutActions.toggleSidebar
};

interface OtherProps {
    children: (props: LayoutContainerProps) => React.ReactNode
};

type LayoutContainerProps = PropsFromState & PropsFromDispatch;

class LayoutContainer extends React.Component<LayoutContainerProps & OtherProps> {
    public render() {
        const { children, ...rest } = this.props;
        return children({ ...rest });
    }
}

const mapStateToProps = ({ layout }: ApplicationState) => ({
    theme: layout.theme,
    sidebarOpen: layout.sidebarOpen
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setTheme: (theme: ThemeColors) => dispatch(layoutActions.setTheme(theme)),
    toggleSidebar: () => dispatch(layoutActions.toggleSidebar())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutContainer);