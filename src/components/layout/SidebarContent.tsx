import * as React from 'react';
import styled from '../../utils/styled';
import { keyframes } from 'emotion';

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

const openAnimationSidebar = (props: any, isOpen: boolean) => {
    return keyframes`
        from { width: ${isOpen ? props.theme.sidebar.closedWidth : props.theme.sidebar.openWidth};}
        to { width: ${isOpen ? props.theme.sidebar.openWidth : props.theme.sidebar.closedWidth}; }
    `;
}

const MenuWrapper: React.SFC<MenuWrapperProps> = ({ isOpen, children }) => {
    const Inner = styled('div')`
        display: flex;
        flex-direction: column;
        background-color: ${props => props.theme.colors.sidebarBackground};
        animation: ${props => openAnimationSidebar(props, isOpen)}};
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
    `;

    return <Inner>{children}</Inner>
}

const openAnimationContent = (props: any, isOpen: boolean) => {
    return keyframes`
        from { width: calc(100vw - ${isOpen ? props.theme.sidebar.closedWidth : props.theme.sidebar.openWidth});}
        to { width: calc(100vw - ${isOpen ? props.theme.sidebar.openWidth : props.theme.sidebar.closedWidth}); }
    `;
}

const ContentWrapper: React.SFC<MenuWrapperProps> = ({ isOpen, children }) => {
    const Inner = styled('div')`
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.body};
        animation: ${props => openAnimationContent(props, isOpen)}};
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
    `;

    return <Inner>{children}</Inner>
}