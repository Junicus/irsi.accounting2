import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as ledgerConvertActions from '..//store/ledger/actions';

interface PropsFromState {

}

interface PropsFromDispatch {
    convertFile: typeof ledgerConvertActions.convertFile
}

interface OtherProps {
    children: (prop: LedgerConvertContainerProps) => React.ReactNode
}

type LedgerConvertContainerProps = PropsFromState & PropsFromDispatch;

class LedgerConvertContainer extends React.Component<LedgerConvertContainerProps & OtherProps> {
    public render() {
        const { children, ...rest } = this.props;
        return children({ ...rest });
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    convertFile: (data: any) => dispatch(ledgerConvertActions.convertFile(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LedgerConvertContainer);