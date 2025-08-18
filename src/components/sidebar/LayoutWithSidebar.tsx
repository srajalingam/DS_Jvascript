import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import styles from "./layoutwithsidebar.module.css";


const LayoutWithSidebar = () => (
  <div className={styles.appContainer}>
    <Sidebar />
    <main className={styles.content}>
      <Outlet />
    </main>
  </div>
);

export default LayoutWithSidebar;