import * as React from 'react';
import { reduxForm, InjectedFormProps, Field, WrappedFieldProps } from 'redux-form';
import DropZone from 'react-dropzone';

interface FormProps {
    concept: string
}

const adaptFileEventToValue = (delegate: any) => (e: any) => delegate(e.target.files[0]);

const FileInput: React.SFC<WrappedFieldProps> = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps },
    meta: omitMeta,
    ...props
}) => {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...inputProps}
            {...props}
        />
    )
}

class LedgerConvertForm extends React.Component<InjectedFormProps<FormProps>> {
    public render() {
        const { pristine, reset, submitting, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="concept">Concept</label>
                    <Field
                        name='concept'
                        component='input'
                        type='text'
                        required
                        placeholder='Concept' />
                    <label htmlFor="ledger">Ledger File</label>
                    <Field name="ledger" component={FileInput} type="file" required />
                </div>
                <div>
                    <button type='submit' disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type='button' disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm<FormProps>({
    form: 'ledgerConvert'
})(LedgerConvertForm);