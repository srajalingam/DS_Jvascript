import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const LayoutWithSidebar = () => (
  <div className="appContainer">
    <Sidebar />
    <main className="content">
      <Outlet />
    </main>
  </div>
);

export default LayoutWithSidebar;