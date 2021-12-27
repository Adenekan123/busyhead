import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuth, Component }) => {
  const auth = isAuth;
  return auth ? (
    <Component />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
