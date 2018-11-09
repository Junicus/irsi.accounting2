import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuSection, MenuState } from '../../store/menu';
import MenuContainer from '../../containers/MenuContainer';

const SidebarMenu: React.SFC = () => (
    <React.Fragment>
        <ContextMenu />
        <MainMenu />
        <SettingsMenu />
    </React.Fragment>
);

const MainMenu: React.SFC = () => (
    <MenuContainer>
        {({ menu }) => (
            <React.Fragment>
                {renderMenu({ menu: menu.main })}
            </React.Fragment>
        )}
    </MenuContainer>
);

const SettingsMenu: React.SFC = () => (
    <MenuContainer>
        {({ menu }) => {
            return menu.settings ?
                <React.Fragment>
                    {renderMenu({ menu: menu.settings })}
                </React.Fragment> : null;
        }}
    </MenuContainer>
);

const ContextMenu: React.SFC = () => (
    <MenuContainer>
        {({ menu }) => {
            return menu.context ?
                <React.Fragment>
                    {renderMenu({ menu: menu.context })}
                </React.Fragment> : null;
        }}
    </MenuContainer>
);

export default SidebarMenu;

interface RenderMenuArgs {
    menu: MenuSection
}

const renderMenu = ({ menu }: RenderMenuArgs) => {
    return menu.items.map((e) => {
        return <Link key={e.url} to={e.url}>{e.text}</Link>;
    });
}
