import * as React from 'react';
import styled from '../../utils/styled';

interface OwnProps {
    sidebarOpen: boolean,
    menu: React.ReactNode
}

const SidebarContent: React.SFC<OwnProps> = ({ sidebarOpen, menu, children }) => {
    return (
        <Wrapper>
            <MenuWrapper isOpen={sidebarOpen}>{menu}</MenuWrapper>
            <ContentWrapper isOpen={sidebarOpen}>{children}</ContentWrapper>
        </Wrapper>
    )
};

export default SidebarContent;

const Wrapper = styled('div')`
    width: 100%;
    height: calc(100vh - ${props => props.theme.heights.header});
    display: flex;
`;

interface MenuWrapperProps {
    isOpen: boolean
}

const MenuWrapper: React.SFC<MenuWrapperProps> = ({ isOpen, children }) => {
    const Inner = styled('div')`
        display: flex;
        flex-direction: column;
        background-color: ${props => props.theme.colors.sidebarBackground};
        width: ${props => isOpen ? props.theme.sidebar.openWidth : props.theme.sidebar.closedWidth};
    `;

    const openClass = isOpen ? 'open' : 'closed';

    return <Inner className={openClass}>{children}</Inner>
}

const ContentWrapper: React.SFC<MenuWrapperProps> = ({ isOpen, children }) => {
    const Inner = styled('div')`
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.body};
        width: calc(100vw - ${props => isOpen ? props.theme.sidebar.openWidth : props.theme.sidebar.closedWidth});
    `;

    return <Inner>{children}</Inner>
}