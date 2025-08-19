import React from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.sidebarList}>
          <li>
            <Link to="/frequencyCounter">Frequency Counter</Link>
          </li>
          <li>
            <Link to="/Practise1">Practise Section1</Link>
          </li>
           <li>
            <Link to="/multiplePointer">Muliple pointer pattern</Link>
          </li>
           <li>
            <Link to="/twoPointer">Two pointer pattern</Link>
          </li>
          <li>
            <Link to="/maxsubarray">Kadane Pattern</Link>
          </li>
          <li>
            <Link to="/recursion">Recursion</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
