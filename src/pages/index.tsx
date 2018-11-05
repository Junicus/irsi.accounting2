import * as React from 'react';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';
import styled from '../utils/styled';

export default () => (
    <Page>
        <Container>
            <PageContent>
                <h1>Hello World</h1>
            </PageContent>
        </Container>
    </Page>
);

const PageContent = styled('article')`
    max-width: ${props => props.theme.widths.md};
    margin: 0 auto;
    line-height: 1.6;
`;