import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';
import styled from '../../utils/styled';
import Container from './Container';
import LayoutContainer from '../../containers/LayoutContainer';

interface HeaderProps {
    title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
    <Wrapper>
        <HeaderInner>
            <HeaderLeft>
                <Title>{title}</Title>
            </HeaderLeft>
            <HeaderRight>
                <LayoutContainer>
                    {({ theme, sidebarOpen, setTheme, toggleSidebar }) => (
                        <React.Fragment>
                            <CurrentTheme>Current theme: {theme}</CurrentTheme>
                            <ThemeSwitcherButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                                Switch theme
                            </ThemeSwitcherButton>
                            <CurrentSidebarState>is Open: {sidebarOpen}</CurrentSidebarState>
                            <ToggleSidebarButton onClick={() => toggleSidebar()}>
                                Toggle Sidebar
                            </ToggleSidebarButton>
                        </React.Fragment>
                    )}
                </LayoutContainer>
            </HeaderRight>
        </HeaderInner>
    </Wrapper>
);

export default Header;

const Wrapper = styled('header')`
    display: flex;
    padding: 0.5rem 1.5rem;
    height: ${props => props.theme.heights.header};
    background-color: ${props => props.theme.colors.brand};
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.headings};
`;

const HeaderInner = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

const HeaderLeft = styled('div')`
    padding-right: 1rem;
`;

const HeaderNav = styled('nav')`
    flex: 1 1 auto;
    maring: 1rem 0;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        margin: 0;
    }
`;

const HeaderNavLink = styled(NavLink)`
    margin: 0 1rem;
`;

const HeaderLinkActive = css`
    text-decoration: underline;
`;

const HeaderRight = styled('div')`
    padding-left: 1rem;
`;

const Title = styled('h2')`
    margin: 0;
    font-weight: 500;
`;

const CurrentTheme = styled('span')`
    margin-right: 1rem;
`;

const ThemeSwitcherButton = styled('button')`

`;

const CurrentSidebarState = styled('span')`
    margin-right: 1rem;
`;

const ToggleSidebarButton = styled('button')`
`;