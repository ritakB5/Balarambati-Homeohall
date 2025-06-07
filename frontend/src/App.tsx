import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';

import TreatmentsPage from '@/pages/TreatmentsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';



function App() {
  return (
    <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

  );
}

export default App;
