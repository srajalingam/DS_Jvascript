import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LayoutWithSidebar from './components/sidebar/LayoutWithSidebar';
import LayoutNoSidebar from './components/sidebar/LayoutNoSidebar';
import Recursion from './components/recursion/Recursion';
import Login from './pages/login/Login';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Default route: Login */}
        <Route path="/" element={<Login />} />
        {/* Routes with sidebar */}
        <Route element={<LayoutWithSidebar />}>
          <Route path="recursion" element={<Recursion />} />
        </Route>
        {/* You can add more routes without sidebar here if needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
