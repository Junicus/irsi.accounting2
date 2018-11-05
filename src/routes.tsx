import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Root from './components/layout/Root';
import Header from './components/layout/Header';
import SidebarMenu from './components/layout/SidebarMenu';
import SidebarContent from './components/layout/SidebarContent';
import IndexPage from './pages/index';
import LayoutContainer from './containers/LayoutContainer';

const Routes: React.SFC = () => (
    <Root>
        <Header title='Example App' />
        <LayoutContainer>
            {
                ({ sidebarOpen }) => (
                    <SidebarContent sidebarOpen={sidebarOpen} menu={<SidebarMenu />}>
                        <Switch>
                            <Route exact path='/' component={IndexPage} />
                        </Switch>
                    </SidebarContent>
                )
            }
        </LayoutContainer>
    </Root>
);

export default Routes;