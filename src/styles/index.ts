import { injectGlobal } from 'react-emotion';
import normalize from './normalize';

injectGlobal`
    ${normalize}
`;