import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const auth = useSelector((store) => {
    return store.auth.isAuth;
  });

  return auth ? children : <Navigate to={"/login"} />;
};
