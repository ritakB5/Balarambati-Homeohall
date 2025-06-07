import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Index from '@/pages/Index';
import TreatmentsPage from '@/pages/TreatmentsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import DoctorsPage from '@/pages/DoctorsPage';
import DoctorDetailPage from '@/pages/DoctorDetailPage';

function App() {
  const { ToastContainer } = useToast();

  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<DoctorDetailPage />} />
          
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
