import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../store';

import { Dispatch } from 'redux';
import * as menuActions from '../store/menu/actions';
import { MenuState, MenuSection } from '../store/menu';

interface PropsFromState {
    menu: MenuState
}

interface PropsFromDispatch {
    setMenu: typeof menuActions.setMenu
}

interface OtherProps {
    children: (props: MenuContainerProps) => React.ReactNode
}

type MenuContainerProps = PropsFromState & PropsFromDispatch;

class MenuContainer extends React.Component<MenuContainerProps & OtherProps>  {
    public render() {
        const { children, ...rest } = this.props;
        return children({ ...rest });
    }
}

const mapStateToProps = ({ menu }: ApplicationState) => ({
    menu
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setMenu: (menu: MenuSection) => dispatch(menuActions.setMenu(menu))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);