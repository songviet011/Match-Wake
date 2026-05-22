import { Navigate } from 'react-router-dom';

export default function ProtectedAdminRoute({ children }) {
  const isAuth = localStorage.getItem('match_wake_admin_auth') === 'true';

  if (!isAuth) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}
