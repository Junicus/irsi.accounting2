import * as React from 'react';
import Page from '../components/layout/Page';
import Container from '../components/layout/Container';
import styled from '../utils/styled';
import LedgerConvertForm from '../components/ledger/LedgerConvertForm';
import LedgerConvertHistory from '../components/ledger/LedgerConvertHistory';

const handleSubmit = (data: any) => {
    console.log(data);
}

export default () => (
    <Page>
        <Container>
            <PageContent>
                <h1>Convert Ledger</h1>
                <LedgerConvertForm onSubmit={handleSubmit} />
                <h1>History</h1>
                <LedgerConvertHistory />
            </PageContent>
        </Container>
    </Page>
);

const PageContent = styled('article')`
    max-width: ${props => props.theme.widths.lg};
    margin: 0 auto;
    line-height: 1.6;
`;