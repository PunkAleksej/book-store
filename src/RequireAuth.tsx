import * as React from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = localStorage.getItem('token')
  let location = useLocation();
  //auth = '';
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAuth;