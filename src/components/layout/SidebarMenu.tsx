import * as React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu: React.SFC = () => (
    <React.Fragment>
        <Link to='/'>Home</Link>
        <Link to='/ledger-convert'>Convert Ledger</Link>
    </React.Fragment>
);

export default SidebarMenu;