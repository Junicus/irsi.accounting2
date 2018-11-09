import * as React from 'react';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';
import styled from '../utils/styled';
import MenuContainer from '../containers/MenuContainer';

export default () => (
    <Page>
        <Container>
            <PageContent>
                <h1>Hello World</h1>
                <TestMenuContext />
            </PageContent>
        </Container>
    </Page>
);

class TestMenuContext extends React.Component<any> {
    public render() {
        return (
            <MenuContainer>
                {({ setMenu }) => {
                    return <button onClick={() => click(setMenu)}>Test</button>
                }}
            </MenuContainer>
        );
    }
}

const click = (onClick: Function) => {
    onClick({ name: 'context', items: [{ text: 'Test', url: '/test' }] });
}

const PageContent = styled('article')`
    max-width: ${props => props.theme.widths.lg};
    margin: 0 auto;
    line-height: 1.6;
`;