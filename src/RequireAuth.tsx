import * as React from 'react';

import {
  useLocation,
  Navigate,
} from 'react-router-dom';
import { useAppSelector } from './store';

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAppSelector((store) => store.userState.user?.email);
  // let auth = localStorage.getItem('token')
  const location = useLocation();
  // auth = '';
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAuth;
