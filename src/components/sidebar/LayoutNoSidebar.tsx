import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutNoSidebar: React.FC = () => (
  <div className="content">
    <Outlet />
  </div>
);

export default LayoutNoSidebar;