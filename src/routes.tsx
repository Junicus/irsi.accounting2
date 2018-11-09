import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Root from './components/layout/Root';
import Header from './components/layout/Header';
import SidebarMenu from './components/layout/SidebarMenu';
import SidebarContent from './components/layout/SidebarContent';
import LayoutContainer from './containers/LayoutContainer';
import IndexPage from './pages/index';
import LedgerConvert from './pages/ledger-convert';

const Routes: React.SFC = () => (
    <Root>
        <Header title='Example App' />
        <LayoutContainer>
            {
                ({ sidebarOpen }) => (
                    <SidebarContent sidebarOpen={sidebarOpen} menu={<SidebarMenu />}>
                        <Switch>
                            <Route exact path='/' component={IndexPage} />
                            <Route exact path='/ledger-convert' component={LedgerConvert} />
                        </Switch>
                    </SidebarContent>
                )
            }
        </LayoutContainer>
    </Root>
);

export default Routes;