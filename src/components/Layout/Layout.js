import React, {Fragment} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
    <Fragment>
        <header>Header will be here</header>
        <Toolbar/>
        <main className="Layout-Content">
            {props.children}
        </main>
    </Fragment>
);

export default Layout;