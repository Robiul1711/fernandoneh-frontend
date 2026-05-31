import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "@/redux/slices/authSlice";

/**
 * PrivateRoute — blocks unauthenticated access to the dashboard.
 * Redirects to /login and preserves the intended path via location state
 * so the user can be sent back after logging in.
 */
const PrivateRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
