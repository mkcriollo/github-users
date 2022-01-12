import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }
};
export default PrivateRoute;
