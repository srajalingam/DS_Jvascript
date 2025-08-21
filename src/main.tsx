import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import LayoutWithSidebar from './components/sidebar/LayoutWithSidebar';
import Recursion from './components/recursion/Recursion';
import Login from './pages/login/Login';
import FrequencyCounter from './components/frequencyCounter/FrequencyCounter';
import MultiplePointers from './components/multiplepointers/MultiplePointers';
import TwoPointer from './components/twoPointers/TwoPointer';
import MaxSubarraySumKadane from './components/maxsubarraysumKadane/MaxSubarraySumKadane';
import Practise1 from './components/practise1/Container';
import PractiseSection from './components/practise1/PractiseSection';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Login route */}
          <Route index element={<Login />} />
          {/* Routes with sidebar */}
          <Route element={<LayoutWithSidebar />}>
            <Route path="frequencyCounter" element={<FrequencyCounter/>} />
            <Route path="Practise1" element={<Practise1 />}>
              <Route path=":name" element={<PractiseSection />} />
            </Route>
            <Route path="multiplePointer" element={<MultiplePointers />} />
            <Route path="twoPointer" element={<TwoPointer/>} />
            <Route path="maxsubarray" element={<MaxSubarraySumKadane />} />
            <Route path="recursion" element={<Recursion />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
