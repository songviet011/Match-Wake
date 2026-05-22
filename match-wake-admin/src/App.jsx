import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import DashboardScreen from './screens/DashboardScreen';
import AdminLogin from './screens/AdminLogin';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedAdminRoute>
              <DashboardScreen />
            </ProtectedAdminRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
