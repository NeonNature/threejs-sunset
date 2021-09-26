import * as React from 'react';
import { container } from './layout.module.css';

const Layout = ({ children }) => <div className={container}>{children}</div>;

export default Layout;
