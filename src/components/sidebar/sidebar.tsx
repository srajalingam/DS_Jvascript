import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';

const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <nav>
            <ul className={styles.sidebarList}>
            <li>
            <Link to="/recursion">Recursion</Link>
            </li>
            </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;